const savedReducer = (state = [], action) => {
    switch (action.type) {
        case 'addToSaved':
            return [...state, action.payload]
        case 'removeFromSaved':
            return state.filter((el) => el.model !== action.payload)
        default:
            return state
    }
}

export default savedReducer
