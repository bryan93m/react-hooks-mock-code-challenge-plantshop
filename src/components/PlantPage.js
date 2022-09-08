import React, {useState, useEffect} from "react";
import axios from "axios";
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("http://localhost:6001/plants")
    .then(res => {
      setPlants(res.data)
    })
  }, [])

  const createPlant = (newPlant) => {
    axios.post("http://localhost:6001/plants", newPlant)
    .then(res => {
      setPlants([...plants, res.data])
    })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:6001/plants/${id}`)
    .then(res => {
      setPlants(plants.filter(plant => plant.id !== id))
    })
  }

  const handleUpdate = (id, updatedPlant) => {
    axios.patch(`http://localhost:6001/plants/${id}`, updatedPlant)
    .then(res => {
      setPlants(plants.map(plant => plant.id === id ? res.data : plant))
    })
  }



  const displayedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))



  return (
    <main>
      <NewPlantForm createPlant={createPlant}/>
      <Search onSearch={setSearch} />
      <PlantList plants={displayedPlants} deletePlant={handleDelete} updatePlant={handleUpdate}/>
    </main>
  );
}

export default PlantPage;
