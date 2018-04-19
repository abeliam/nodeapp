import mongoose from "mongoose"

mongoose.Promise = global.Promise

async function connect(models) {
  await mongoose.connect("mongodb://localhost/forum")
  await import(models)
}

export default connect
