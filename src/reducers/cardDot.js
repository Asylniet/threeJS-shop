const cardDot = (state = false, action) => {
    switch (action.type) {
        case 'CardDot' :
            return action.payload
        default :
            return state
    }
}

export default cardDot