
const signup = userObject => {
  console.log(userObject)
  fetch("http://localhost:5000/users",{
    method: "POST",
    body: JSON.stringify({"user": userObject}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export { signup }
