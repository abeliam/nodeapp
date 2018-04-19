import HTTPStatus from "http-status"

function asyncHandler(handler) {
  return async (request, response) => {
    try {
      await handler(request, response)
    }
    catch(error) {
      console.log("Internal server error: ", error)
      response.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR)
    }
  }
}

export default asyncHandler
