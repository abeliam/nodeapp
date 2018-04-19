const path = require("path")
const fs = require("fs")
const mkdirp = require("mkdirp")

const root = path.join(__dirname, "..")
const cwd = process.cwd()

const link = path.join(root, ".storage", cwd.substring(root.length, cwd.length))
const target = path.join(cwd, ".storage")

mkdirp(path.join(link, ".."), (err) => {
  fs.stat(target, (err, stat) => {
    if (err && (err.code === 'ENOENT')) {
      fs.mkdir(target, (err) => {
        if (err) console.log(err)
      })
    }
    fs.unlink(link, (err) => {
      fs.symlink(target, link, "dir", (err) => {
        if (err) console.log(err)
      })
    })
  })
})
