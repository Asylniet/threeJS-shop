import React from 'react'

const Button = ({ onClick, text, checked }) => {
    return <button className={`actionButton ${checked && 'delete'}`} onClick={onClick}>{text}</button>
}

export default Button
