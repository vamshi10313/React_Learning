import React from 'react'

const UpdateArray = () => {
    const [fruits, setFruits] = React.useState(["Apple", "Banana", "Mango"]);

    function handleAddFruit() {
        const newFruit = document.getElementById('fruit').value;
        if (newFruit.trim() !== "") {
            setFruits([...fruits, newFruit]);
            document.getElementById('fruit').value = "";
        }
    }
    function handleRemoveFruit(index) {
        const updatedFruits = fruits.filter((_, i) => i !== index);
        setFruits(updatedFruits);
    }
  return (
    <div>
        <ul>
            {fruits.map((fruit,index) => (
                <li key={index} onClick={()=>handleRemoveFruit(index)}>{fruit} </li>
            ))}

        </ul>
        <input id='fruit' type="text" placeholder='Enter fruit name' />

        <button onClick={handleAddFruit}>Add Fruit</button> 
    </div>
  )
}

export default UpdateArray