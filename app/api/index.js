import express from "express"
import HTTPStatus from "http-status"
import bodyParser from "body-parser"
import bearerToken from "express-bearer-token"
import cors from "cors"
import path from "path"

import apiRouter from "./router"
import connect from "@forum/database/connect/main.db"

async function main() {
  await connect(path.join(__dirname, "models.js"))

  const api = express()
  const api_port = 8181

  api.use(cors())
  api.use(bodyParser.json())
  api.use(bodyParser.urlencoded({ extended: true }))
  api.use(bearerToken())
  api.use("/", apiRouter)

  api.listen(api_port, () => console.log(`api server listening on port ${api_port}`))
}

try {
  main()
}
catch(e) {
  console.log(e)
}
