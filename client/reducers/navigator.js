import { NAVIGATE } from '../actions/navigate'

const initialState = true

const navigator = (state = initialState, action) => {
    switch(action.type) {
        case NAVIGATE:
            return false
        case RESET:
            return true
        default: 
            return state 
    }
}

export default navigator