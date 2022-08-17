import React from 'react'
import '../css/sidebars.css'
import { ReactComponent as TrashSvg } from '../assets/icons/trash.svg'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromSaved } from '../actions/actions'

const Bookmarks = ({ visible }) => {
    const bookmarks = useSelector((state) => state.saved)
    const dispatch = useDispatch()
    return (
        <div className={`bookmarks ${visible && 'visible'}`}>
            {bookmarks.length > 0 ? (
                <div className="flex column bookmarks_wrapper">
                    <h1>Saved items</h1>
                    {bookmarks.map((el) => (
                        <div className="savedProduct" key={el.model}>
                            <div className="flex first-part">
                                <img
                                    src={require(`../assets/images/${el.model}.png`)}
                                    alt={el.model}
                                />
                                <div className="flex column">
                                    <h2>
                                        {el.model
                                            .replace('_', ' ')
                                            .replace(/([A-Z])/g, ' $1')
                                            .trim()}
                                    </h2>
                                    <h3>{el.prices[0]}</h3>
                                </div>
                            </div>
                            <div
                                className="icon"
                                onClick={() =>
                                    dispatch(removeFromSaved(el.model))
                                }
                            >
                                <TrashSvg />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>You have no saved items</h2>
            )}
        </div>
    )
}

export default Bookmarks
