import { produce } from 'immer';
import { useReducer } from 'react';
import Button from '../components/ui/buttons/Button';
import Panel from '../components/ui/Panel';

const TYPES_LIST = {
  INCREMENT_COUNT: 'increnent',
  DECREMENT_COUNT: 'decrement',
  SET_VALUETOADD: 'updateValueToAdd',
  ADD_VALUETOADD_TO_COUNT: 'addValueToCount',
};

const reducer = (state, action) => {
  const { type, payload } = action;
  let { count, valueToAdd } = state;

  switch (type) {
    case TYPES_LIST.INCREMENT_COUNT:
      count = count + 1;
      return;
    case TYPES_LIST.DECREMENT_COUNT:
      count = count - 1;
      return;
    case TYPES_LIST.SET_VALUETOADD:
      valueToAdd = payload;
      return;
    case TYPES_LIST.ADD_VALUETOADD_TO_COUNT:
      count = count + valueToAdd;
      valueToAdd = 0;
      return;
    default:
      throw new Error(`Reducer: Something went wrong with ${type}`);
  }
};

export default function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const { count, valueToAdd } = state;

  const increment = () => {
    dispatch({
      type: TYPES_LIST.INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: TYPES_LIST.DECREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = +e.target.value;
    dispatch({ type: TYPES_LIST.SET_VALUETOADD, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: TYPES_LIST.ADD_VALUETOADD_TO_COUNT });
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
