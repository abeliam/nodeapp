import express from "express"
import path from "path"
import adminOutput from "@nodeapp/admin-client/output"
import HTTPStatus from "http-status"
import { hasRole } from "@nodeapp/api-server/middlewares/auth"
import bearerToken from "express-bearer-token"
import fs from "fs"
import Database from "@nodeapp/database"

const app_port = 8282
const app = express()

app.use(bearerToken())
const checkUser = async (request, response, next) => {
    try {
        await hasRole("admin")(request, response, next)
    }
    catch(e) {
        response.sendFile(path.join(adminOutput, "index.html"))
    }
}

app.use("/", checkUser, express.static(adminOutput))

async function main() {
    await Database.connect()
    await Database.initialize()
    app.listen(app_port, () => console.log(`admin app server listening on port ${app_port}`))
}

main()
