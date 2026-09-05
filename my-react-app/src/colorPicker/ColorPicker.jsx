import React from 'react'
import { useState } from 'react'
import './ColorPicker.css'
const ColorPicker = () => {
    const[color, setColor] = useState('#0a3b2c')
  return (
    <div className='color-picker'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  )
}

export default ColorPicker