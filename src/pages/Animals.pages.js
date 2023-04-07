import './Animals.css';
import { useState } from 'react';
import AnimalShow from '../components/animals/AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function Animals() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, i) => (
    <AnimalShow key={i} type={animal} />
  ));

  return (
    <div className='animals'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default Animals;
