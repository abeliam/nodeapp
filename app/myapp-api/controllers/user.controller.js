import HTTPStatus from "http-status"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import User from "@nodeapp/database/collections/user.collection"
import cert from "../cert"

const userController = {
    async index(request, response) {
        const users = await User.findAll()
        response.json(users)
    },
    async read(request, response) {
        try {
            let fields = "_id username"

            try {
                const decoded = await jwt.verify(request.token, cert)
                if (decoded.id === request.params.id) {
                    fields += " email"
                }
            }
            catch(e) {}

            const user = await User.findById(request.params.id, fields)
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
