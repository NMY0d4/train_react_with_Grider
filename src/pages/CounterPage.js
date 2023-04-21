import { useReducer } from 'react';
import Button from '../components/ui/buttons/Button';
import Panel from '../components/ui/Panel';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'updateValueToAdd':
      return { ...state, valueToAdd: payload };
    case 'addValueToCount':
      return { ...state, count: state.count + payload, valueToAdd: 0 };
    default:
      return console.error('Something went wrong');
  }
};

export default function CounterPage({ initialCount }) {

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const { count, valueToAdd } = state;

  const increment = () => {
    dispatch({
      type: 'increment',
    });
  };

  const decrement = () => {
    dispatch({
      type: 'decrement',
    });
  };

  const handleChange = (e) => {
    const value = +e.target.value;
    dispatch({ type: 'updateValueToAdd', payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'addValueToCount', payload: valueToAdd });
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
