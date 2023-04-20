import { useState } from 'react';
import Button from '../components/ui/buttons/Button';
import Panel from '../components/ui/Panel';

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    const value = +e.target.value;
    setValueToAdd(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>count is {count}</h1>
      <div className='flex flex-row gap-3'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}
