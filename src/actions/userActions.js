
const signup = userObject => {
  return dispatch =>
  fetch("http://localhost:5000/users",{
    method: "POST",
    body: JSON.stringify({"user": userObject}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => console.log("users", resp))
}

const login = ({ email, password }) => {
  return dispatch =>
  fetch("http://localhost:5000/user_token",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
         //"Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({auth: {email: email, password: password}})
  }).then(resp => resp.json()).then(resp => localStorage.setItem("token",resp.jwt))
}



export { signup, login }
