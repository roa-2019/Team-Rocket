import { NOSE_SHAPE, NOSE_COLOR } from '../actions'


const initialRocketState = {
   noseShape: '',
   noseColor: ''
}


const rocketReducer = (state = initialRocketState, action) => {
  switch (action.type) {
    case NOSE_SHAPE:
      return { ...state, noseShape: action.shape }

    case NOSE_COLOR:
        return { ...state, noseColor: action.color }

    default:
      return state
  }
}

export default rocketReducer