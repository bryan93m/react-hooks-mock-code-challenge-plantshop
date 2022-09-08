import React, {useState} from "react";

const defaultData = {
  name: "",
  image: "",
  price: ""
}


function NewPlantForm({createPlant}) {
  const [formData, setFormData] = useState(defaultData)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createPlant({
      name: formData.name,
      image: formData.image,
      price: parseFloat(formData.price)
    })
    setFormData(defaultData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          type="text" 
          name="name"
          value={formData.name}
          placeholder="Plant name" />
        <input 
          onChange={handleChange}
          type="text" 
          name="image"
          value={formData.image} 
          placeholder="Image URL" />
        <input 
          onChange={handleChange}
          type="number" 
          name="price"
          value={formData.price} 
          step="0.01" 
          placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
