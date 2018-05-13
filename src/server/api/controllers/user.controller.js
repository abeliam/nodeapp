import HTTPStatus from "http-status"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import User from "@nodeapp/database/collections/user.collection"

const userController = {
  async read(request, response) {
    try {
      const user = await User.findById(request.params.id, "_id username email")
      response.json(user)
    }
    catch(e) {
      console.log(e)
      response.sendStatus(HTTPStatus.BAD_REQUEST)
    }
  },

  async list(request, response) {
    try {
      const users = await User.findAll()
      response.json(users)
    }
    catch(e) {
      console.log(e)
      response.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR)
    }
  },

  async create(request, response) {
    try {
      const {username, password, email} = request.body
      if (await User.findByUsername(username, "_id"))
        throw "Username already exists"
      const passwordHash = await bcrypt.hash(password, 10)
      await User.insert(username, passwordHash, email)
      response.sendStatus(HTTPStatus.CREATED)
    }
    catch(err) {
      console.log(err)
      response.status(HTTPStatus.BAD_REQUEST).json({
        status: HTTPStatus.BAD_REQUEST,
        message: "Validation Error"
      })
    }
  }
}


export default userController
