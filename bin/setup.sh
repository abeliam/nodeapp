npm install
./node_modules/.bin/lerna bootstrap
./node_modules/.bin/lerna exec "node `pwd`/bin/link-storage.js"
