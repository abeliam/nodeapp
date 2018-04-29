bold=\033[1m
normal=\033[0m

all: start

deps: install

install: client/node_modules server/node_modules server/node_modules/@nodeapp

client/node_modules: client/package.json
	@echo -e "${bold}==== Installing client dependencies ...${normal}"
	cd client && npm install

server/node_modules: server/package.json
	@echo -e "${bold}==== Installing server dependencies ...${normal}"
	cd server && npm install

server/node_modules/@nodeapp: client/node_modules
	mkdir -p server/node_modules/@nodeapp
	ln -s `pwd`/client `pwd`/server/node_modules/@nodeapp/client

start: install
	make start-api-server start-public-server start-admin-server

start-%-server: server/node_modules
	@echo -e "${bold}==== Starting $* server ...${normal}"
	cd server && npm run start-$*-server

build:
	@echo -e "${bold}==== Building ...${normal}"

test:
	@echo -e "${bold}==== Testing ...${normal}"

.PHONY: all
