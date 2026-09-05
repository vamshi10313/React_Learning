import React from 'react'

const Food = () => {
    let food1 = "Orange";
    let food2 = "Banana";

  return (
    <div>
        <h1>My Favorite Foods</h1>
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    </div>
  );
}

export default Food