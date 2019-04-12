import { STRIKE,
  BALL,
  FOUL,
  HIT } from '../actions'

const initialState = {
  ball: 0,
  strike: 0,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case STRIKE:
      if (state.strike < 2) {
        return {
          ...state,
          strike: state.strike+1
        }
      } else {
        return {
          ...state,
          ball: 0,
          strike: 0
        }
      }
    case BALL:
      if (state.ball < 3) {
        return {
          ...state,
          ball: state.ball+1
        }
      } else {
        return {
          ...state,
          ball: 0,
          strike: 0
        }
      }
    case FOUL:
      return {
        ...state,
        strike: state.strike<2 ? state.strike+1 : state.strike
      }
    case HIT:
      return {
        ...state,
        ball: 0,
        strike: 0
      }
    default:
      return state;
  }
}