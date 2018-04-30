bold=\033[1m
normal=\033[0m

all: build

install: client/node_modules server/node_modules database/node_modules

%/node_modules: %/package.json
	@echo -e "${bold}==== Installing $* dependencies ...${normal}"
	cd $* && npm install

setup: install create-folders link-local-dependencies

create-folders: .dist/node/node_modules .storage/database

.dist/node/node_modules:
	mkdir -p .dist/node
	ln -sf `pwd`/server/node_modules `pwd`/.dist/node/node_modules

.storage/database:
	mkdir -p .storage/database

link-local-dependencies: server/node_modules/@nodeapp/client server/node_modules/@nodeapp/database

server/node_modules/@nodeapp/client:
	cd server && npm link ../client

server/node_modules/@nodeapp/database:
	cd server && npm link ../database

start: setup
	@echo -e "${bold}==== Starting in production mode ...${normal}"
	cd server && npm start

start-dev: setup
	@echo -e "${bold}==== Starting in development mode ...${normal}"
	cd server && npm run start-dev

start-database:
	mongod --dbpath .storage/database

build: setup
	@echo -e "${bold}==== Building in production mode ...${normal}"
	cd client && npm run build
	cd server && npm run build

build-dev: setup
	@echo -e "${bold}==== Building in development mode ...${normal}"
	cd client && npm run build-dev
	cd server && npm run build-dev

test: test-client test-server

test-client:
	@echo -e "${bold}==== Testing client ...${normal}"
	cd client && npm test

test-server:
	@echo -e "${bold}==== Testing server ...${normal}"
	cd server && npm test

uninstall:
	rm -rf client/node_modules database/node_modules server/node_modules
