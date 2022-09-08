import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, deletePlant, updatePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard 
          key={plant.id} 
          plant={plant}
          deletePlant={deletePlant}
          updatePlant={updatePlant} 
        />
      ))}
    </ul>
  );
}

export default PlantList;
