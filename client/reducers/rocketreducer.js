import { NOSE_SHAPE, NOSE_COLOR, BODY_SHAPE, FIN_SHAPE } from '../actions'


const initialRocketState = {
   noseShape: '',
   noseColor: '',
   bodyShape: '',
   finShape: ''
}


const rocketReducer = (state = initialRocketState, action) => {
  switch (action.type) {
    case NOSE_SHAPE:
      return { ...state, noseShape: action.shape }

    case NOSE_COLOR:
        return { ...state, noseColor: action.color }

    case BODY_SHAPE: 
      return { ...state, bodyShape: action.shape }

    case FIN_SHAPE: 
      return { ...state, finShape: action.shape }  

    default:
      return state
  }
}

export default rocketReducer