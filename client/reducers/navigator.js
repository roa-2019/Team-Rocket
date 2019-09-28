const initialState = true


const navigator = (state = initialState, action) => {
    switch(action.type) {
        case 'NewUser':
            return action.target
        case 'GoToBuildRocket':
            return false 
        case 'LandingPage':
            return true
        default: 
            return state 
    }
}

export default navigator