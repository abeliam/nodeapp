/*
This file exports the API Router
*/

import { Router } from "express"
import HTTPStatus from "http-status"

import authController from "./controllers/auth.controller"
import userController from "./controllers/user.controller"

const apiRouter = new Router()

// Authentication routes

apiRouter.post("/auth", authController.signIn)
apiRouter.post("/user", userController.create)
apiRouter.get("/user/:id", userController.read)

apiRouter.get("/users", userController.index)

// Unhandled routes
apiRouter.use("*", (request, response) => response.sendStatus(HTTPStatus.NOT_FOUND))

export default apiRouter
