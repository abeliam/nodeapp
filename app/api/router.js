import { Router } from "express"
import HTTPStatus from "http-status"
import asyncHandler from "./utils/asyncHandler"

// Import controllers
import userController from "./controllers/user.controller"

// Import middlewares
import authMiddlewares from "./middlewares/authMiddlewares"

/*
  This file exports the API Router
*/

const apiRouter = new Router()

/*
  Define user routes
*/

apiRouter
  .get("/user", authMiddlewares.isAuthenticated, userController.getPrivateData)

  .get("/user/list", userController.list)

  .get("/user/:id", authMiddlewares.isAuthenticated, userController.getPublicData)

  .post("/user/register", asyncHandler(userController.register))

  .post("/user/login", userController.login)


// Unhandled routes
apiRouter.use("*", (request, response) => response.sendStatus(HTTPStatus.NOT_FOUND))

export default apiRouter
