import { Router } from "express"
import HTTPStatus from "http-status"

/*
  This file exports the API Router
*/

const apiRouter = new Router()

// Unhandled routes
apiRouter.use("*", (request, response) => response.sendStatus(HTTPStatus.NOT_FOUND))

export default apiRouter
