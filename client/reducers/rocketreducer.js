import { NOSE_SHAPE, NOSE_COLOR } from '../actions'

const initialRocketState = {
  rocket: { noseShape: '', noseColor: '' }
}

const rocketReducer = (state = initialRocketState, action) => {
  switch (action.type) {
    case NOSE_SHAPE:
      return Object.assign({}, store, { rocket: Object.assign({}, store.rocket, action) });

    case NOSE_COLOR:
      return Object.assign({}, store, { rocket: Object.assign({}, store.rocket, action) });

    default:
      return state
  }
}

export default rocketReducer

// let store = {
//   rocket: { noseColor: '', noseShape: '' }
// }

// let action = { noseColor: 'red' }

// let newStore = Object.assign({}, store, { rocket: Object.assign({}, store.rocket, action) });