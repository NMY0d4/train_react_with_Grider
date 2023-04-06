import React from 'react';
const handleClick = () => {
  console.log('Button was clicked!');
};

function App() {
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
