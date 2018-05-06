import { MongoClient } from "mongodb"

class Database {
  constructor() {
    this.url = "mongodb://localhost"
    this. dbName = "nodeapp"
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
}

export default new Database()
