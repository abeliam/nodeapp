import path from "path"

const config = {
  apps: [{
    name: "@nodeapp/api-server",
    script: "index.js",
    node_args: "-r @std/esm",
    watch: [__dirname],
    ignore_watch : [path.join(__dirname, "node_modules")],
  }]
}

export default config
