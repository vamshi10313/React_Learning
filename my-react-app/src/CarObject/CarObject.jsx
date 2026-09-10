import React from 'react'

const CarObject = () => {
    const [car, setCar] = React.useState([]);
    const[carYear, setCarYear] = React.useState(new Date().getFullYear());
    const[carMake, setCarMake] = React.useState();
    const[carModel, setCarModel] = React.useState();

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    function handleRemoveCar(index) {
        setCar(c => c.filter((car, i) => i !== index));
    }
    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        setCar(c => [...car, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }
  return (
    <div>
        <h1>List of cars</h1>
            <ul>
                {car.map((car,index) => (
                    <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
                ))}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='enter car make'/> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='enter car model'/> <br />
            <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default CarObject