import Database from ".."
import makeProjection from "../utils/projection"
import { ObjectID } from "mongodb"
import userschema from "@nodeapp/shared/schemas/User.json"

class UserCollection {
  async initialize() {
    this.collection = Database.db.collection("users")

    await Database.db.command( { collMod: "users",
       validator: { $jsonSchema: userschema },
       validationLevel: "moderate",
       validationAction: "warn"
    })
  }

  async findAll(fields) {
    return await this.collection.find().toArray()
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

  async insert(username, password, email) {

  }
}

export default new UserCollection()
