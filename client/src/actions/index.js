// export const STRIKE_REQUESTED = "STRIKE_REQUESTED"
// export const BALL_REQUESTED = "BALL_REQUESTED"
// export const FOUL_REQUESTED = "FOUL_REQUESTED"
// export const HIT_REQUESTED = "HIT_REQUESTED"
export const STRIKE = "STRIKE"
export const BALL = "BALL"
export const FOUL = "FOUL"
export const HIT = "HIT"

export const strike = () => {
  return { type: STRIKE }
}

export const foul = () => {
  return { type: FOUL }
}

export const ball = () => {
  return { type: BALL }
}

export const hit = () => {
  return { type: HIT }
}