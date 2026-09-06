
import React from 'react'
import { useState } from 'react';
import './Button.css'

const Button = () => {
    const[count, setCount] = useState(0);
    // const handleClick = (name) => {
    //     console.log(`${name} Button clicked ${count++} times!`);
    // }  

    const handleIncrement = () => {
        setCount((c)=>{
            return c+1
        });
        
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
  return (
    <div>
        <div className='counter'>{count}</div>
        <div className='buttons'>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Button