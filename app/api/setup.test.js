import connect from "@forum/database/connect/test.db"

process.env.NODE_ENV = "test"

let connection

before("connecting to test database",
       async () => {
        connection = await connect()
      }
)

after("droping test database",
      () => {
        if (connection)
          connection.db.dropDatabase()
      })
