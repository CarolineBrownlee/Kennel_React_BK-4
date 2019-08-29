const remoteURL = "http://localhost:5002"

export default {
  // get retrieves an object from a specified resource and idenifier
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  // getAll retrieves an array from a specified resource
  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },
  // delete deletes an object from specified resource and identifier
  delete(id) {
    return fetch(`http://localhost:5002/animals/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  // post will append an object from the body of the http request to a specified resource and will retrieve the newly appended object in the body of the response
  post(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(data => data.json())
},
// edit replaces a representation of the target resource with the request and returns the updated object (needs an id, obj)
  edit(id, obj) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(data => data.json())
  }
}
