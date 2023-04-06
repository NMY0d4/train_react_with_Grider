import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, i) => (
    <AnimalShow key={i} type={animal} />
  ));

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {renderedAnimals}
    </div>
  );
}

export default App;
