const shoppingCardReducer = (state = [], action) => {
    switch (action.type) {
        case 'addToShoppingCard':
            return [...state, action.payload]
        case 'removeFromShoppingCard':
            return state.filter((el) => el !== action.payload)
        default:
            return state
    }
}

export default shoppingCardReducer
