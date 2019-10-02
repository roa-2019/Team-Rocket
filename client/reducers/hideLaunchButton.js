import { HIDE_LAUNCH } from '../actions'
import { RESET } from '../actions/navigate'

const initialState = true

const hideLaunch = (state = initialState, action) => {
    switch(action.type) {
        case HIDE_LAUNCH:
            return false
        case RESET:
            return true
        default: 
            return state 
    }
}

export default hideLaunch