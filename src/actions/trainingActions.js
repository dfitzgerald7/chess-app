

const fetchGame = fen => {
  return (dispatch => {
    dispatch({type: "LOADING_GAME"})
    return (
      fetch("https://explorer.lichess.ovh/master?fen=" + fen)
      .then(resp => resp.json()).then(game => dispatch({type: "FIND_GAME", payload: game}))
    )
  })
}

const displayGame = gameId => {
  return (dispatch => {
    dispatch({type: "LOADING_GAME"})
    return (
      fetch("https://explorer.lichess.ovh/master/pgn/" + gameId )
      .then(resp => resp.text())
      .then(game => dispatch({type: "DISPLAY_GAME", payload: game})
    ))
  })}
export { fetchGame, displayGame }
