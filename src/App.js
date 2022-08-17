import React, { useState } from 'react'
import './index.css'
import ProductView from './pages/ProductView'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks'
import ShoppingCard from './components/ShoppingCard'

function App() {
    const [bookmarkVisible, setBookmarkVisible] = useState(false)
    const [shoppingCardVisible, setShoppingCardVisible] = useState(false)
    const [model, setModel] = useState(0)
    const [trigger, setTrigger] = useState(0)
    const macbooks = [
        {
            model: 'MacbookAir_m1',
            colors: [
                { colorCode: '#B0B4B6', colorName: 'Space Gray' },
                { colorCode: '#efd1bb', colorName: 'Gold' },
                { colorCode: '#DFE2E1', colorName: 'Silver' },
            ],
            processor: 'apple-m1-icon-mac.png',
            ssd: [256],
            cpu: ['8-Core CPU'],
            gpu: ['7-Core GPU'],
            frameSize: 13,
            adapter: [30],
            prices: ['$999.00'],
        },
        {
            model: 'MacbookAir_m2',
            colors: [
                { colorCode: '#2E3641', colorName: 'Midnight' },
                { colorCode: '#F0E4D2', colorName: 'Starlight' },
                { colorCode: '#7D7E80', colorName: 'Space Gray' },
                { colorCode: '#E2E4E6', colorName: 'Silver' },
            ],
            processor: 'apple-m2-icon-mac.png',
            ssd: [256, 512],
            cpu: ['8-Core CPU'],
            gpu: ['8-Core GPU', '10-Core GPU'],
            frameSize: 13.6,
            adapter: [30, 35],
            prices: ['$1,199.00', '$1,499.00'],
        },
        {
            model: 'MacbookPro_m1',
            colors: [{ colorCode: '#E2E4E6', colorName: 'Silver' }],
            processor: 'apple-m1-icon-mac.png',
            ssd: [256],
            cpu: ['8-Core CPU'],
            gpu: ['8-Core GPU'],
            frameSize: 16,
            adapter: [30],
            prices: ['$1,399.00'],
        },
        {
            model: 'MacbookPro_m2',
            colors: [
                { colorCode: '#7D7E80', colorName: 'Space Gray' },
                { colorCode: '#E2E4E6', colorName: 'Silver' },
            ],
            processor: 'apple-m2-icon-mac.png',
            ssd: [256, 512],
            cpu: ['8-Core CPU'],
            gpu: ['8-Core GPU', '10-Core GPU'],
            frameSize: 16,
            adapter: [30, 35],
            prices: ['$1,499.00', '$1,899.00'],
        },
    ]
    return (
        <div className="App flex column">
            <Header
                onBookmarkClick={() => {
                    setBookmarkVisible(!bookmarkVisible)
                    setShoppingCardVisible(false)
                }}
                onShoppingCardClick={() => {
                    setShoppingCardVisible(!shoppingCardVisible)
                    setBookmarkVisible(false)
                }}
                onLinkClick={(value) => {
                    setModel(value)
                    setTrigger(value)
                }}
            />
            <ProductView model={macbooks[model]} trigger={trigger} />
            <Bookmarks visible={bookmarkVisible} />
            <ShoppingCard visible={shoppingCardVisible} />
        </div>
    )
}

export default App
