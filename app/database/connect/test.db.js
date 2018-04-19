import mongoose from "mongoose"

mongoose.Promise = global.Promise

async function connect() {
  await mongoose.connect("mongodb://localhost/forum-test")
  return mongoose.connection
}

export default connect
