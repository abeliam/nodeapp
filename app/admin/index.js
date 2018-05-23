import express from "express"
import path from "path"
import adminOutput from "@nodeapp/admin-client/output"
import HTTPStatus from "http-status"
import { isAuthenticated } from "@nodeapp/api-server/middlewares/auth"
import bearerToken from "express-bearer-token"
import fs from "fs"

const app_port = 8282
const app = express()

app.use(bearerToken())
const checkUser = async (request, response, next) => {
    try {
        await isAuthenticated(request, response)
        next()
    }
    catch(e) {
        response.sendFile(path.join(adminOutput, "index.html"))
    }
}

app.use("/", checkUser, express.static(adminOutput))


/*

app.set('view engine', 'ejs');

let jsBundle
const files = fs.readdirSync(adminOutput)

files.forEach(file => {
    if (/admin\.[a-zA-Z0-9]*\.js/.test(file)) {
        jsBundle = file
    }
 })
console.log(jsBundle)

const checkUser = async (request, response, next) => {
    try {
        await isAuthenticated(request, response)
        next()
    }
    catch(e) {
        response.render(login)
    }
}

app.use("/", checkUser, express.static(adminOutput))

app.get("*", (request, response) => {
    console.log("ok")
    response.send("not found")
})*/

app.listen(app_port, () => console.log(`admin app server listening on port ${app_port}`))
