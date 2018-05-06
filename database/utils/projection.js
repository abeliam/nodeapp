
function makeProjection(fields) {
  if (fields === undefined) return null
  
  const projection = {}
  fields.split(" ").forEach(field => {
    projection[field] = 1
  })
  if (projection._id === undefined)
    projection._id = 0
  return projection
}

export default makeProjection
