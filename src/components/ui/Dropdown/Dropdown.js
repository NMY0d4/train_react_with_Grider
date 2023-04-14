import { useState } from 'react';

function Dropdown({ options, handleSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((currentIsOpen) => !currentIsOpen);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    console.log(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div className='noselect' onClick={handleOpen}>
        Select...
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
