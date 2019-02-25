

const fetchGame = fen => {
  return (dispatch => {
    dispatch({type: "LOADING_GAME"})
    return (
      fetch("https://explorer.lichess.ovh/master?fen=" + fen)
      .then(resp => resp.json()).then(game => dispatch({type: "DISPLAY_GAME", payload: game}))
    )
  })
}

export default fetchGame
