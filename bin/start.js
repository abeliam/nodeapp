import pm2 from "pm2"
import path from "path"
import colors from "colors"

function serve(ecosystem) {
  pm2.connect((err) => {
    if (err) {
      console.log(err);
      process.exit(2);
    }

    pm2.start(ecosystem, (err, proc) => {
      if (err) throw err
      pm2.disconnect()
    })
  })
}

import(path.join(process.cwd(), "ecosystem.config.js"))
  .then(ecosystem => {
    serve(ecosystem.default)
  })
  .catch(e => console.log("error: ", e))
