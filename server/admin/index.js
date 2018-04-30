import express from "express"
import path from "path"
import { adminOutput } from "@nodeapp/client"
const app_port = 8282
const app = express()

app.use(express.static(adminOutput))

app.get('*', (request, response) => response.sendFile(path.join(client, "index.html")))

app.listen(app_port, () => console.log(`admin app server listening on port ${app_port}`))
