import express from "express"
import path from "path"
import client from "@nodeapp/public/client"

const app_port = 8080
const app = express()

app.use(express.static(client))

app.get('*', (request, response) => response.sendFile(path.join(client, "index.html")))

app.listen(app_port, () => console.log(`app server listening on port ${app_port}`))
