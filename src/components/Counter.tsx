import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className={classes.green}>Counter</h1>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      </div>
    </>
  );
};

export default Counter;
