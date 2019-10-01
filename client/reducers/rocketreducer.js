import { NOSE_SHAPE, CHANGE_COLOR, BODY_SHAPE, STROKE_COLOR, WING_SHAPE, WINDOW_SHAPE, THRUSTER_SHAPE, IS_ROCKET_COMPLETE, ROBOT_FILL_OPACITY } from '../actions'

const initialRocketState = {
  noseShape: '',
  changeColor: '',
  bodyShape: '',
  strokeColor: '',
  wingShape: '',
  windowShape: '',
  thrusterShape: '',
  isRocketComplete: '',
  robotFillOpacity: '0.0'
}

const rocketReducer = (state = initialRocketState, action) => {
  switch (action.type) {
    case NOSE_SHAPE:
      return { ...state, noseShape: action.shape }

    case CHANGE_COLOR:
      return { ...state, changeColor: action.color }

    case BODY_SHAPE:
      return { ...state, bodyShape: action.shape }
      
    case STROKE_COLOR:
      return { ...state, strokeColor: action.color }

    case WING_SHAPE:
      return { ...state, wingShape: action.shape }

    case WINDOW_SHAPE:
      return { ...state, windowShape: action.shape }

    case THRUSTER_SHAPE:
      return { ...state, thrusterShape: action.shape }

    case IS_ROCKET_COMPLETE:
      return { ...state, isRocketComplete: action.boolean}

    case ROBOT_FILL_OPACITY:
      return { ...state, robotFillOpacity: action.fill}
    default:
      return state
  }
}

export default rocketReducer