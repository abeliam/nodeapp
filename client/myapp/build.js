const Bundler = require("parcel-bundler")
const path = require("path")

const file = path.join(__dirname, "index.html")

let outDir
if (process.argv.length > 2) {
    if (process.argv[2].charAt(0) == "/") {
      outDir = process.argv[2]
    }
    else {
        outDir = path.join(process.cwd(), process.argv[2])
    }
}
else {
    outDir = path.join(__dirname, ".dist")
}


const options = {
  outDir,
  cacheDir: path.join(__dirname, ".cache"),
  watch: process.env.NODE_ENV === "development"
}

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
