import express from "express"
import path from "path"
import { publicOutput } from "@nodeapp/client"
const app_port = 8080
const app = express()

app.use(express.static(publicOutput))

app.get('*', (request, response) => response.sendFile(path.join(client, "index.html")))

app.listen(app_port, () => console.log(`public app server listening on port ${app_port}`))
