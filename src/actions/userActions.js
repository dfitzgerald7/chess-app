
const signup = userObject => {
  return dispatch =>
  fetch("https://doug-fitzgerald-chess-api-pg.herokuapp.com/users",{
    method: "POST",
    body: JSON.stringify({"user": userObject}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => console.log("users", resp))
}

const login = ({ email, password }, history) => {
  return dispatch =>
  fetch("https://doug-fitzgerald-chess-api-pg.herokuapp.com/user_token",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
       "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({auth: {email: email, password: password}})
  }).then(resp => resp.json())
  .then(resp => {
    localStorage.setItem("token",resp.jwt)
    history.push("/")})
}

const logout = history => {
  localStorage.removeItem("token")
  history.push("/")
}
export { signup, login, logout }
