import schemas from "@nodeapp/database/schemas"
import mongoose from "mongoose"

export const User = mongoose.model("User", schemas.user)
