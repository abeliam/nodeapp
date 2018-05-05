import HTTPStatus from "http-status"
import jwt from "jsonwebtoken"

const authController = {
  async signIn(request, response) {
    try {
      const {username, password} = request.body
      const token = "okok"
      response.json({ token })
    }
    catch(errors) {
      response.status(400).json({errors})
    }
  }
}


export default authController
