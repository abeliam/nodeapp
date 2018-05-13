import fs from "fs"
import path from "path"

const cert = fs.readFileSync(path.join(__dirname, "../../../.storage/security/public.pem"))

export default cert
