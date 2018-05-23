import jwt from "jsonwebtoken"
import path from "path"
import fs from "fs"

const cert = fs.readFileSync(path.join(__dirname, "../../../.storage/security/public.pem"))

export async function isAuthenticated(request, response) {
    const decoded = await jwt.verify(request.token, cert, { algorithms: ['RS256'] })
}

export function hasRole(role) {
    return async (request, response) =>  {
        const decoded = await jwt.verify(request.token, cert)
    }
}

export default {isAuthenticated, hasRole}
