import { Router } from "express"
import HTTPStatus from "http-status"

/*
  This file exports the API Router
*/

const apiRouter = new Router()

// Unhandled routes
apiRouter.use("*", (request, response) => response.sendStatus(500))

export default apiRouter
