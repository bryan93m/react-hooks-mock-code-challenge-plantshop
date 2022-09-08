import React, {useState} from "react";

function PlantCard({plant, deletePlant, updatePlant}) {
  const [isStocked, setIsStocked] = useState(true)
  const [priceInput, setPriceInput] = useState(plant.price)

  function handleStock() {
    setIsStocked(!isStocked)
  }
  const handleDelete = () => {
    deletePlant(plant.id)
  }


  function handleSubmit(e){
    e.preventDefault()
    updatePlant(plant.id, {price: parseFloat(priceInput)})
  }
  

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price: 
        <form onSubmit={handleSubmit}>
          <input 
            name="price" 
            type="text" 
            value={priceInput} 
            onChange={(e) => setPriceInput(e.target.value)}
          />
          <button type="submit">Update Price</button>
        </form>
      </p>
      <div className="row">
      {isStocked ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
        <button onClick={handleDelete}>&times;</button>
      </div>
    </li>
  );
}

export default PlantCard;
