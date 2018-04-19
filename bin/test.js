import path from "path"
import Mocha from "mocha"
import fs from "fs"

process.env.NODE_ENV = "test"

require("@babel/register")()

const testFileRegExp = /\.test\.js$/g
const mocha = new Mocha()

function addFiles(directory) {
    if (/node_modules/.test(directory)) return

    const list = fs.readdirSync(directory)
    list.forEach(filename => {
    const file = path.join(directory, filename)
    if (fs.lstatSync(file).isDirectory()) {
      addFiles(file)
    }
    else if (testFileRegExp.test(file)) {
      mocha.addFile(file)
    }
  })
}

addFiles(process.cwd())

const runner = mocha.run()

runner.on("end", () => process.exit(runner.failures))
