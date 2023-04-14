import { Fragment, useState } from 'react';
import Dropdown from './components/ui/Dropdown/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);
  const options = [
    { label: "it's red", value: 'red' },
    { label: "it's green", value: 'green' },
    { label: "it's blue", value: 'blue' },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <Fragment>
      <div className='flex'>
        <Dropdown options={options} value={selection} onChange={handleSelect} />
      </div>
    </Fragment>
  );
}

export default App;
