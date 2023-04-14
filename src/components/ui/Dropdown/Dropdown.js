import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from '../Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((currentIsOpen) => !currentIsOpen);

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(false);
    // configure option the user click don
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className='w-48 relative'>
      <Panel
        className='noselect flex justify-between items-center cursor-pointer'
        onClick={handleOpen}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full'>
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
