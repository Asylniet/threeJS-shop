export const addToShoppingCard = (obj) => {
    return {
        type: 'addToShoppingCard',
        payload: obj,
    }
}

export const removeFromShoppingCard = (obj) => {
    return {
        type: 'removeFromShoppingCard',
        payload: obj,
    }
}

export const addToSaved = (obj) => {
    return {
        type: 'addToSaved',
        payload: obj,
    }
}

export const removeFromSaved = (obj) => {
    return {
        type: 'removeFromSaved',
        payload: obj,
    }
}

export const changeSavedDot = (bool) => {
    return {
        type: 'SavedDot',
        payload: bool,
    }
}

export const changeCardDot = (bool) => {
    return {
        type: 'CardDot',
        payload: bool,
    }
}
