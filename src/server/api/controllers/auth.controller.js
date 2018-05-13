import HTTPStatus from "http-status"
import jwt from "jsonwebtoken"

import User from "@nodeapp/database/collections/user.collection"
import bcrypt from "bcrypt"

const secret = "jkhyiowxhcjkfgozeq"

const authController = {
  async signIn(request, response) {
    try {
      const {username, password} = request.body
      const user = await User.findByUsername(username, "_id passwordHash")
      if (user === null)
        throw `User ${username} does not exists`
      if (!await bcrypt.compare(password, user.passwordHash))
        throw "Invalid password"
      const token = jwt.sign({
        id: user._id
      }, secret, { expiresIn: "1h" })
      response.json({ token })
    }
    catch(e) {
      response.status(HTTPStatus.BAD_REQUEST).json({
        status: HTTPStatus.BAD_REQUEST,
        message: "Authentication failed"
      })
    }
  }
}


export default authController
