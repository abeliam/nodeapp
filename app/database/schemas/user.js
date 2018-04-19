import mongoose from "mongoose"
import shortid from "shortid"

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  username:  String,
  password: String,
  mail:   String,
  status: {
    type: String,
    enum: ["available", "unavailable"],
    default: "unavailable"
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
})

export default userSchema
