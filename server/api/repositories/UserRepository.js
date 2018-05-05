import db from "@nodeapp/database"

const UserRepository = {
  async findAll() {
    return await db.users.find().toArray()
  }
}

export default UserRepository
