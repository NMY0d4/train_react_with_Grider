import { Fragment } from 'react';
import Dropdown from './components/ui/Dropdown/Dropdown';

function App() {
  const options = [
    { label: 'red', value: 'red' },
    { label: 'green', value: 'green' },
    { label: 'blue', value: 'blue' },
  ];

  return (
    <Fragment>
      <Dropdown options={options} />
    </Fragment>
  );
}

export default App;
