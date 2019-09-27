import { NOSE_SHAPE, CHANGE_COLOR, BODY_SHAPE, WING_SHAPE, WINDOW_SHAPE, THRUSTER_SHAPE } from '../actions'


const initialRocketState = {
  noseShape: '',
  changeColor: '',
  bodyShape: '',
  wingShape: '',
  windowShape: '',
  thrusterShape: ''
}


const rocketReducer = (state = initialRocketState, action) => {
  switch (action.type) {
    case NOSE_SHAPE:
      return { ...state, noseShape: action.shape }

    case CHANGE_COLOR:
      return { ...state, Color: action.color }

    case BODY_SHAPE:
      return { ...state, bodyShape: action.shape }

    case WING_SHAPE:
      return { ...state, wingShape: action.shape }

    case WINDOW_SHAPE:
      return { ...state, windowShape: action.shape }

    case THRUSTER_SHAPE:
      return { ...state, thrusterShape: action.shape }

    default:
      return state
  }
}

export default rocketReducer