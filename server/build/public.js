const Bundler = require('parcel-bundler');
const path = require('path');

const file = path.join(__dirname, '../public/index.js');

const options = {
  outDir: path.join(__dirname, "../../.dist/node/public"),
  cacheDir: path.join(__dirname, "../../.cache/node/public"),
  target: "node"
};

async function build() {
  const bundler = new Bundler(file, options);
  const bundle = await bundler.bundle();
}

try {
  build()
}
catch(e) {
  console.log(e)
}
