bold=\033[1m
normal=\033[0m

all: build

install: client/node_modules server/node_modules link-local-dependencies

client/node_modules: client/package.json
	@echo -e "${bold}==== Installing client dependencies ...${normal}"
	cd client && npm install

server/node_modules: server/package.json
	@echo -e "${bold}==== Installing server dependencies ...${normal}"
	cd server && npm install

link-local-dependencies: client/node_modules server/node_modules server/node_modules/@nodeapp

server/node_modules/@nodeapp: server/node_modules
	mkdir -p server/node_modules/@nodeapp client/node_modules/@nodeapp
	ln -sf `pwd`/client `pwd`/server/node_modules/@nodeapp/client
	ln -sf `pwd`/database `pwd`/server/node_modules/@nodeapp/database

start: install
	make start-api-server start-public-server start-admin-server

start-database:
	sudo mongod --dbpath .storage/database

start-%-server: server/node_modules
	@echo -e "${bold}==== Starting $* server ...${normal}"
	cd server && npm run start-$*-server

build: install
	@echo -e "${bold}==== Building ...${normal}"
	cd client && npm run build

build-dev: install
	@echo -e "${bold}==== Building ...${normal}"
	cd client && npm run build-dev

test: test-client test-server

test-client: install
	@echo -e "${bold}==== Testing client ...${normal}"
	cd client && npm test

test-server: install
	@echo -e "${bold}==== Testing server ...${normal}"
	cd server && npm test

.PHONY: all
