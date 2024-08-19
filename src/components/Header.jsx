import React, { useEffect } from 'react'
import '../css/header.css'
import { ReactComponent as Bookmark } from '../assets/icons/bookmark.svg'
import { ReactComponent as ShoppingCard } from '../assets/icons/shoppingCard.svg'
import { useSelector, useDispatch } from 'react-redux'
import { changeSavedDot, changeCardDot } from '../actions/actions'

const Header = ({ onBookmarkClick, onShoppingCardClick, onLinkClick }) => {
    const dispatch = useDispatch()
    const shoppingCardRedux = useSelector((state) => state.shoppingCard)
    const bookmarkRedux = useSelector((state) => state.saved)

    const cardDot = useSelector((state) => state.cardDot)
    const savedDot = useSelector((state) => state.savedDot)

    useEffect(() => {
        shoppingCardRedux.length < 1 && dispatch(changeCardDot(false))
        bookmarkRedux.length < 1 && dispatch(changeSavedDot(false))
    }, [shoppingCardRedux, bookmarkRedux, dispatch])

    const bookmarkClick = () => {
        onBookmarkClick()
        dispatch(changeSavedDot(false))
    }

    const shoppingCardClick = () => {
        onShoppingCardClick()
        dispatch(changeCardDot(false))
    }
    return (
        <header>
            <div className="logo">Apple's Macbooks</div>
            <nav>
                <a href="#" onClick={() => onLinkClick(0)}>Macbook Air m1</a>
                <a href="#" onClick={() => onLinkClick(1)}>Macbook Air m2</a>
                <a href="#" onClick={() => onLinkClick(2)}>Macbook Pro m1</a>
                <a href="#" onClick={() => onLinkClick(3)}>Macbook Pro m2</a>
            </nav>
            <div className="icons">
                <div className="icon" onClick={bookmarkClick}>
                    <Bookmark />
                    <div className={`${savedDot && 'active'}`}></div>
                </div>
                <div className="icon card" onClick={shoppingCardClick}>
                    <ShoppingCard />
                    <div className={`${cardDot && 'active'}`}></div>
                </div>
            </div>
        </header>
    )
}

export default Header
