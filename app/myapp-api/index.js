import express from "express"
import HTTPStatus from "http-status"
import bodyParser from "body-parser"
import bearerToken from "express-bearer-token"
import cors from "cors"
import path from "path"
import Database from "@nodeapp/database"
import apiRouter from "./router"

async function main() {
  try {
    const db = await Database.connect()
    await Database.initialize()

    const api = express()
    const api_port = 8181

    api.use(cors())
    api.use(bodyParser.json())
    api.use(bodyParser.urlencoded({ extended: true }))
    api.use(bearerToken())

    api.use("/", apiRouter)

    api.listen(api_port, () => console.log(`api server listening on port ${api_port}`))
  }
  catch(e) {
    console.log("server error: ", e)
    process.exit(1)
  }
}

main()
