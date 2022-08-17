import React from 'react'
import '../css/sidebars.css'
import { ReactComponent as TrashSvg } from '../assets/icons/trash.svg'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromShoppingCard } from '../actions/actions'

const ShoppingCard = ({ visible }) => {
    const shoppingCard = useSelector((state) => state.shoppingCard)
    const dispatch = useDispatch()
    return (
        <div className={`shoppingCard ${visible && 'visible'}`}>
            {shoppingCard.length > 0 ? (
                <div className="flex column shoppingCard_wrapper">
                    <h1>Items in card</h1>
                    {shoppingCard.map((el, index) => (
                        <div className="savedProduct" key={index}>
                            <div className="flex first-part">
                                <div className="flex column">
                                    <img
                                        src={require(`../assets/images/${el.model}.png`)}
                                        alt={el.model}
                                    />
                                    <div
                                        className="color"
                                        style={{ backgroundColor: el.color }}
                                    ></div>
                                </div>
                                <div className="flex column">
                                    <h2>
                                        {el.model
                                            .replace('_', ' ')
                                            .replace(/([A-Z])/g, ' $1')
                                            .trim()}
                                    </h2>
                                    <h3>{el.price}</h3>
                                </div>
                            </div>
                            <div
                                className="icon"
                                onClick={() => {
                                    dispatch(removeFromShoppingCard(el))
                                }}
                            >
                                <TrashSvg />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>No items in card</h2>
            )}
        </div>
    )
}

export default ShoppingCard
