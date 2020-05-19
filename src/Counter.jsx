import React from 'react';
import { atom, useRecoilState } from 'recoil';

const counterState = atom({
  key: 'counterState',
  default: 0,
});

export const Counter = () => {
  const [value, setValue] = useRecoilState(counterState);
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  return (
    <div className="example">
      {value}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
