import { useState } from 'react';
import Dropdown from '../components/ui/dropdown/Dropdown';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "it's red", value: 'red' },
    { label: "it's green", value: 'green' },
    { label: "it's blue", value: 'blue' },
  ];

  return (
    <div className='flex'>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
