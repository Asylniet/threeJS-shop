//Basic Import
import React, { useEffect, useState } from 'react'
//Style
import '../css/sidebar.css'
//Components
import ChooseColorButton from './ChooseColorButton'
import ChooseSSD from './ChooseSSD'
import Button from './Button'
//Media
import { ReactComponent as TrackSvg } from '../assets/icons/track.svg'
import { ReactComponent as AppleShoppingCart } from '../assets/icons/appleShoppingCart.svg'
import { ReactComponent as Bookmark } from '../assets/icons/bookmark.svg'
//Packages
import { useSelector, useDispatch } from 'react-redux'
import {
    addToSaved,
    addToShoppingCard,
    changeCardDot,
    changeSavedDot,
    removeFromSaved,
    removeFromShoppingCard,
} from '../actions/actions'

const Sidebar = ({ onButtonClick, model }) => {
    const shoppingCard = useSelector((state) => state.shoppingCard)
    const bookmark = useSelector((state) => state.saved)

    const dispatch = useDispatch()

    const [index, setIndex] = useState(0)
    const [chosenColor, setChosenColor] = useState(model.colors[0].colorCode)
    useEffect(() => {
        setChosenColor(model.colors[0].colorCode)
        setColorName(model.colors[0].colorName)
        setIndex(0)
    }, [model])
    useEffect(() => {
        bookmark.find((el) => el.model === model.model)
            ? setBookmarkChecked(true)
            : setBookmarkChecked(false)
        if (
            shoppingCard.find(
                (el) =>
                    el.model === model.model &&
                    el.color === chosenColor &&
                    el.price === model.prices[index]
            )
        ) {
            setCardChecked(true)
        } else {
            setCardChecked(false)
        }
    }, [bookmark, shoppingCard, chosenColor, index, model.model, model.prices])

    const [bookmarkChecked, setBookmarkChecked] = useState(false)
    const [cardChecked, setCardChecked] = useState(false)
    const [colorName, setColorName] = useState(model.colors[0].colorName)
    const [ssd, setSsd] = useState(model.ssd[0])

    const onColorClick = (color) => {
        onButtonClick(color)
        setChosenColor(color)
        for (let i = 0; i < model.colors.length; i++) {
            const el = model.colors[i]
            Object.keys(el).forEach((key) => {
                if (el[key] === color) {
                    setColorName(model.colors[i].colorName)
                }
            })
        }
    }

    const onSsdClick = (ssd, index) => {
        setSsd(ssd)
        setIndex(index)
    }

    const onBookmarkClick = () => {
        if (!bookmarkChecked) {
            dispatch(addToSaved(model))
            dispatch(changeSavedDot(true))
        } else {
            dispatch(removeFromSaved(model.model))
        }
    }

    const onShoppingCardButtonClick = () => {
        if (!cardChecked) {
            dispatch(
                addToShoppingCard({
                    model: model.model,
                    color: chosenColor,
                    price: model.prices[index],
                })
            )
            dispatch(changeCardDot(true))
        } else {
            dispatch(
                removeFromShoppingCard(
                    shoppingCard.find(
                        (el) =>
                            el.model === model.model &&
                            el.color === chosenColor &&
                            el.price === model.prices[index]
                    )
                )
            )
        }
    }
    return (
        <div className="sidebar flex column">
            <div className="flex">
                <h1>
                    {model.model
                        .replace('_', ' ')
                        .replace(/([A-Z])/g, ' $1')
                        .trim()}
                </h1>
                <img
                    src={require(`../assets/images/${model.processor}`)}
                    alt="Processor"
                />
            </div>
            <h3>{colorName}</h3>
            <div className="flex chooseColors">
                {model.colors.map((color) => (
                    <ChooseColorButton
                        key={color.colorCode}
                        color={color.colorCode}
                        chosenColor={chosenColor}
                        onButtonClick={onColorClick}
                    />
                ))}
            </div>
            <div className="flex chooseSSDs">
                {model.ssd.map((el, index) => (
                    <ChooseSSD
                        key={index}
                        index={index}
                        text={el}
                        onClick={onSsdClick}
                        ssd={ssd}
                    />
                ))}
            </div>
            <h2>{model.cpu}</h2>
            <h2>{model.gpu[index]}</h2>
            <h2>8GB Unified Memory</h2>
            <span>16-core Neural Engine</span>
            <span>{`${model.frameSize}-inch Liquid Retina display with True Tone`}</span>
            <span>1080p FaceTime HD camera</span>
            <span>MagSafe 3 charging port</span>
            <span>Two Thunderbolt / USB 4 ports</span>
            <span>Magic Keyboard with Touch ID</span>
            <span>Force Touch trackpad</span>
            <span>{`${model.adapter[index]}W USB-C Power Adapter`}</span>
            <h1>{model.prices[index]}</h1>
            <div className="flex more_info">
                <Button
                    text={!cardChecked ? 'Add to Card' : 'Remove from Card'}
                    checked={cardChecked}
                    onClick={() => {
                        onShoppingCardButtonClick()
                    }}
                />
                <Bookmark
                    className={`bookmark ${
                        bookmarkChecked ? 'active' : 'passive'
                    }`}
                    onClick={() => onBookmarkClick()}
                />
            </div>
            <div className="divider"></div>
            <div className="flex more_info">
                <div className="flex start">
                    <TrackSvg />
                    <div className="flex column start">
                        <strong>Delivery:</strong>
                        <small>Free</small>
                        <small>2-3 days</small>
                    </div>
                </div>
                <div className="flex start">
                    <AppleShoppingCart />
                    <div className="flex column start">
                        <strong>Pickup:</strong>
                        <small>Free</small>
                        <small>Today</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
