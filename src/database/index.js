import { MongoClient } from "mongodb"

class Database {
  constructor() {
    this.url = "mongodb://localhost/nodeapp"
    this.dbName = "nodeapp"
  }

  connect() {
    return new Promise((resolve, reject) => MongoClient.connect(this.url, (error, client) => {
        if (error) reject(error)
        console.log("Successfully connected to database")
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
