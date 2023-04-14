import { Fragment, useState } from 'react';
import Dropdown from './components/ui/Dropdown/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);
  const options = [
    { label: 'it\'s red', value: 'red' },
    { label: 'it\'s green', value: 'green' },
    { label: 'it\'s blue', value: 'blue' },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <Fragment>      
      <Dropdown
        options={options}
        selection={selection}
        onSelect={handleSelect}
      />
    </Fragment>
  );
}

export default App;
