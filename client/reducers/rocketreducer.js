import {NOSE_SHAPE, NOSE_COLOR} from '../actions'

const initialRocketState = {
  rocket: {noseShape: '', noseColor: ''}
}

const rocketReducer (state = initialRocketState, action) => {
  switch (action.type) {
    case NOSE_SHAPE:
      return {
        // rocket with rocket.noseShape set to state form action
      }

    case NOSE_COLOR:
      return action.noseColor

    default:
      return state
  }
}

export default rocketReducer
