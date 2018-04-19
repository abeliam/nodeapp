import HTTPStatus from "http-status"
import jwt from "jsonwebtoken"

import { User } from "../models"

async function loginUser(username, password) {

}

/*
  This file export the user controller
  It is an object storing user-related handlers
 */

const userController = {
  /*
    If user is authenticated, respond with his own data in json,
    otherwise response with an HTTP Status error code
   */
  async getPrivateData(request, response) {
    try {
      const payload = jwt.decode(request.token)
      const user = await User.findOne({_id: payload.userid}, "_id username mail")
      response.json(user)
    }
    catch(e) {
      response.status(HTTPStatus.INTERNAL_SERVER_ERROR).send()
    }
  },

  /*
    Get public data of requested user
      @param {id} user unique id
   */
  async getPublicData(request, response) {
    try {
      const user = await User.find({_id: request.params.id}, "_id username")
      response.send(user)
    }
    catch(e) {
      console.log(e)
      response.sendStatus(400)
    }
  },

  async list(request, response) {
    try {
      const users = await User.find()
      response.json(users)
    }
    catch(e) {
      console.log(e)
      response.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR)
    }
  },

  async login(request, response) {
    try {
      const {username, password} = request.body
      const token = await loginUser(username, password)
      response.json({ token })
   }
   catch(errors) {
     response.status(400).json({errors})
   }
 },

  async register(request, response) {
    try {
      const {username, password, mail} = request.body
      await User.create({username, password, mail})
      response.sendStatus(HTTPStatus.CREATED)
    }
    catch(errors) {
      if (errors.username) {
        response.status(HTTPStatus.CONFLICT).json({errors})
      }
      else {
        throw errors
      }
    }
  }
}


export default userController
