import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import CanvasModel from '../components/CanvasModel'

const ProductView = ({ model }) => {
    useEffect(() => {
        setColor(model.colors[0].colorCode)
    }, [model])
    const [color, setColor] = useState(model.colors[0].colorCode)
    const [bought, setBought] = useState(false)
    return (
        <div className="flex main">
            <div className="canvas">
                <CanvasModel
                    color={color}
                    model={model.model}
                    bought={bought}
                />
            </div>
            <Sidebar
                onButtonClick={setColor}
                model={model}
                onBuyClick={setBought}
            />
        </div>
    )
}

export default ProductView
