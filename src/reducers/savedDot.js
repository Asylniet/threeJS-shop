const savedDot = (state = false, action) => {
    switch(action.type) {
        case 'SavedDot' :
            return action.payload
        default :
            return state
    }
}

export default savedDot