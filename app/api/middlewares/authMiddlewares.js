import jwt from "jsonwebtoken"
import HTTPStatus from "http-status"

const secret = "rFdb8KiV7o52RqU28wCpIxRSroL2qGDiAofZSIioCbrsMjt8eaSyP5JQPmvCIJI"

const authMiddlewares = {
  async isAuthenticated(request, response, next) {
    try {
      const payload = await jwt.verify(request.token, secret)
      if (!payload) throw "InvalidTokenError"
      next()
    }
    catch(e) {
      response.sendStatus(HTTPStatus.UNAUTHORIZED)
    }
  },

  hasRole(role) {
    return async (request, response, next) => {
      const payload = await jwt.verify(token, secret)
      if (payload.role === role) {
        next()
      }
      else {
        response.sendStatus(HTTPStatus.UNAUTHORIZED)
      }
    }
  }
}

export default authMiddlewares
