import express from "express"
import path from "path"
import publicOutput from "@nodeapp/public-client/output"
// import Main from "@nodeapp/public-client/modules/app/components/Main"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-dom"
import fs from "fs"

const app_port = 8080
const app = express()

app.use(express.static(publicOutput))

app.get('*', (request, response) => response.sendFile(path.join(publicOutput, "index.html")))

app.listen(app_port, () => console.log(`public app server listening on port ${app_port}`))
