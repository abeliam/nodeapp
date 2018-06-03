import { MongoClient } from "mongodb"

class Database {
  constructor() {
    this.url = "mongodb://db:27017/nodeapp"
    this.dbName = "nodeapp"
  }

  connect() {
    return new Promise((resolve, reject) => MongoClient.connect(this.url, (error, client) => {
        if (error) return reject(error)
        console.log("successfully connected to database")
        this.db = client.db(this.dbName)
        this.users = this.db.collection("users")
        resolve(this.db)
      })
    )
  }

  async initialize() {
    const users = (await import("./collections/user.collection")).default

    await users.initialize()
  }
}

export default new Database()
