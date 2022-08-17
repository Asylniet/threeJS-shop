import shoppingCardReducer from './shoppingCart'
import savedReducer from './saved'
import savedDot from './savedDot'
import cardDot from './cardDot'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    shoppingCard: shoppingCardReducer,
    saved: savedReducer,
    savedDot: savedDot,
    cardDot: cardDot,
})

export default allReducers
