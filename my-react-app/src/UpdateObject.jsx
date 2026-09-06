import React from 'react'

const UpdateObject = () => {

  const [car, setCar] = React.useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  return (
    <div>

      <p>Your favourite car is: {car.brand} {car.model} {car.year} {car.color}</p>

      <input type="text" placeholder='brand' onChange={(e) => setCar({...car, brand: e.target.value})} />
      <input type="text" placeholder='model' onChange={(e) => setCar({...car, model: e.target.value})} />
      <input type="text" placeholder='year' onChange={(e) => setCar({...car, year: e.target.value})} />
      <input type="text" placeholder='color' onChange={(e) => setCar({...car, color: e.target.value})} />
    </div>
  )
}

export default UpdateObject