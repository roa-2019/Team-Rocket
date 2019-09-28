import {combineReducers} from 'redux'

import rocket from './rocketreducer'
import navigator from './navigator'

const reducer = combineReducers({
    rocket,
    navigator
})

export default reducer