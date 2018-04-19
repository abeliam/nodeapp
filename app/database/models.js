import schemas from "./schemas"
import mongoose from "mongoose"

export const User = mongoose.model("User", schemas.user)
export const Forum = mongoose.model("Forum", schemas.forum)
export const Topic = mongoose.model("Topic", schemas.topic)
export const Message = mongoose.model("Message", schemas.message)
