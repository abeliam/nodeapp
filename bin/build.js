import path from "path"
import webpack from "webpack"

async function bundle(configFile) {
  try {
    const config = (await import(configFile)).default
    const compiler = webpack(config)

    const callback = (err, stats) => {
      if (err) {
        console.log(err)
        return
      }

      console.log(stats.toString({
        chunks: false,
        colors: true,
        modules: false,
      }))
    }

    if (process.env.NODE_ENV == "production") {
      compiler.run(callback)
    }
    else {
      compiler.watch({}, callback)
    }
  }
  catch(e) {
    console.log(e)
  }
}


const configFile = path.join(process.cwd(), "webpack.js")
bundle(configFile)
