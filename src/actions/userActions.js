
const signup = userObject => {
  fetch("http://localhost:5000/users",{
    method: "POST",
    body: JSON.stringify({"user": userObject}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => console.log("users", resp))
}

const login = ({ username, password }) => {
  fetch("http://localhost:5000/user_token",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({auth: {username: username, password: password}})
  }).then(resp => console.log("token", resp))
}

export { signup, login }
