import { STRIKE_REQUESTED,
  BALL_REQUESTED,
  FOUL_REQUESTED,
  HIT_REQUESTED,
  STRIKE,
  BALL,
  FOUL,
  HIT } from '../actions'

const initialState = {
  ball: 0,
  strike: 0,
  actionReq: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case STRIKE_REQUESTED:
      return {
        ...state,
        actionReq: true,
      }
    case BALL_REQUESTED:
      return {
        ...state,
        actionReq: true,
      }
    case FOUL_REQUESTED:
      return {
        ...state,
        actionReq: true,
      }
    case HIT_REQUESTED:
      return {
        ...state,
        actionReq: true,
      }
    case STRIKE:
      if (state.strike < 2) {
        return {
          ...state,
          actionReq: false,
          strike: state.strike+1
        }
      } else {
        return {
          ...state,
          actionReq: false,
          ball: 0,
          strike: 0
        }
      }
    case BALL:
      if (state.ball < 3) {
        return {
          ...state,
          actionReq: false,
          ball: state.ball+1
        }
      } else {
        return {
          ...state,
          actionReq: false,
          ball: 0,
          strike: 0
        }
      }
    case FOUL:
      return {
        ...state,
        actionReq: false,
        strike: state.strike<2 ? state.strike+1 : state.strike
      }
    case HIT:
      return {
        ...state,
        actionReq: false,
        ball: 0,
        strike: 0
      }
    default:
      return state;
  }
}