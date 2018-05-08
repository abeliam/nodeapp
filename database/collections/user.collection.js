import Database from ".."
import makeProjection from "../utils/projection"
import { ObjectID } from "mongodb"
import userschema from "@nodeapp/shared/schemas/User.json"

class UserCollection {
  async initialize() {
    this.collection = Database.db.collection("users")

    await Database.db.command({
      collMod: "users",
      validator: { $jsonSchema: userschema },
      validationLevel: "moderate",
      validationAction: "error"
    })
  }

  async findAll(fields) {
    return await this.collection.find({}, {
      projection: makeProjection(fields)
    }).toArray()
  }

  async findById(id, fields) {
    return await this.collection.findOne({
      _id: {
        $eq: new ObjectID(id)
      }
    }, {
      projection: makeProjection(fields)
    })
  }

  async findByUsername(username, fields) {
    return await this.collection.findOne({
      username: {
        $eq: username
      }
    }, {
      projection: makeProjection(fields)
    })
  }

  async insert(username, passwordHash, email) {
    await this.collection.insert({
      username,
      passwordHash,
      email
    })
  }
}

export default new UserCollection()
