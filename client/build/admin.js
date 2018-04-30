const Bundler = require('parcel-bundler');
const path = require('path');

const file = path.join(__dirname, '../admin/index.html');

const options = {
  outDir: path.join(__dirname, "../../.dist/browser/admin"),
  cacheDir: path.join(__dirname, "../../.cache/browser/admin"),
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
