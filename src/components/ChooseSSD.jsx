import React from 'react'

const ChooseSSD = ({ text, onClick, ssd, index }) => {
    return (
        <div
            className={`flex chooseSSD ${ssd === text && 'active'}`}
            onClick={() => onClick(text, index)}
        >
            <h2>{`${text}gb SSD`}</h2>
        </div>
    )
}

export default ChooseSSD
