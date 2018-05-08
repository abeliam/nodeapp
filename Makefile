bold=\033[1m
normal=\033[0m

define run_in_new_terminal
	urxvt -e "zsh" -c $(1)
endef

all: build

install: client/node_modules server/node_modules database/node_modules

%/node_modules: %/package.json
	@echo -e "${bold}==== Installing $* dependencies ...${normal}"
	cd $* && npm install

link: install server/node_modules/@nodeapp/client server/node_modules/@nodeapp/database server/node_modules/@nodeapp/shared client/node_modules/@nodeapp/shared database/node_modules/@nodeapp/shared

server/node_modules/@nodeapp/client:
	cd server && npm link ../client

server/node_modules/@nodeapp/database:
	cd server && npm link ../database

server/node_modules/@nodeapp/shared:
	cd server && npm link ../shared

client/node_modules/@nodeapp/shared:
	cd client && npm link ../shared

database/node_modules/@nodeapp/shared:
	cd database && npm link ../shared

setup: link

start: setup
	@echo -e "${bold}==== Starting in production mode ...${normal}"
	[ -d .dist/node ] || mkdir -p .dist/node
	[ -L .dist/node/node_modules ] || ln -sf `pwd`/server/node_modules `pwd`/.dist/node/node_modules
	cd server && npm start

start-dev: setup
	@echo -e "${bold}==== Starting in development mode ...${normal}"
	[ -d .dist/node ] || mkdir -p .dist/node
	[ -L .dist/node/node_modules ] || ln -sf `pwd`/server/node_modules `pwd`/.dist/node/node_modules
	cd server && npm run start-dev

start-dev-%:
	nodemon -r ./server/node_modules/esm --watch .dist/node/$*/index.js .dist/node/$*/index.js

start-database:
	[ -d .storage/database ] || mkdir -p .storage/database
	mongod --dbpath .storage/database

build: setup
	@echo -e "${bold}==== Building in production mode ...${normal}"
	cd client && npm run build
	cd server && npm run build

build-dev: setup
	@echo -e "${bold}==== Building in development mode ...${normal}"
	cd client && npm run build-dev
	# cd server && npm run build-dev

test: test-client test-server

test-client:
	@echo -e "${bold}==== Testing client ...${normal}"
	cd client && npm test

test-server:
	@echo -e "${bold}==== Testing server ...${normal}"
	cd server && npm test

dev: setup
	$(call run_in_new_terminal,"make start-database") &
	make build-dev
	$(call run_in_new_terminal,"cd server && nodemon -r esm public") &
	$(call run_in_new_terminal,"cd server && nodemon -r esm admin") &
	$(call run_in_new_terminal,"cd server && nodemon -r esm api") &

uninstall:
	rm -rf client/node_modules database/node_modules server/node_modules

clean-dist:
	rm -rf .dist

clean-cache:
	rm -rf .cache
