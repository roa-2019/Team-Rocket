import {combineReducers} from 'redux'

import rocket from './rocketreducer'
import navigator from './navigator'
import hideLaunch from './hideLaunchButton'


const reducer = combineReducers({
    rocket,
    navigator,
    hideLaunch
})

export default reducer