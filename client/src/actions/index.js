export const STRIKE_REQUESTED = "STRIKE_REQUESTED"
export const BALL_REQUESTED = "BALL_REQUESTED"
export const FOUL_REQUESTED = "FOUL_REQUESTED"
export const HIT_REQUESTED = "HIT_REQUESTED"
export const STRIKE = "STRIKE"
export const BALL = "BALL"
export const FOUL = "FOUL"
export const HIT = "HIT"

export const strike = () => {
  return dispatch => {
    dispatch({
      type: STRIKE_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: STRIKE
      })
    }, 1500)
  }
}

export const foul = () => {
  return dispatch => {
    dispatch({
      type: FOUL_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: FOUL
      })
    }, 1500)
  }
}

export const ball = () => {
  return dispatch => {
    dispatch({
      type: BALL_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: BALL
      })
    }, 1500)
  }
}

export const hit = () => {
  return dispatch => {
    dispatch({
      type: HIT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: HIT
      })
    }, 1500)
  }
}