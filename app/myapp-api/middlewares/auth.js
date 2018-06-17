import jwt from "jsonwebtoken"
import path from "path"
import fs from "fs"
import User from "@nodeapp/database/collections/user.collection"
import HTTPStatus from "http-status"

const cert = fs.readFileSync(path.join(__dirname, "../../../.storage/security/public.pem"))

export async function isAuthenticated(request, response) {
    const decoded = await jwt.verify(request.token, cert, { algorithms: ['RS256'] })
}

export function hasRole(role) {
    return async (request, response, next) =>  {
        const decoded = await jwt.verify(request.token, cert, { algorithms: ['RS256'] })
        console.log(decoded)
        const user = await User.findById(decoded.id)
        if (user.role === undefined || user.role !== role)
            response.sendStatus(HTTPStatus.UNAUTHORIZED)
        next()
    }
}

export default {isAuthenticated, hasRole}
