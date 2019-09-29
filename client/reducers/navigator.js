const initialState = true

const navigator = (state = initialState, action) => {
    switch(action.type) {
        case 'GoToBuildRocket':
            return false 
        default: 
            return state 
    }
}

export default navigator