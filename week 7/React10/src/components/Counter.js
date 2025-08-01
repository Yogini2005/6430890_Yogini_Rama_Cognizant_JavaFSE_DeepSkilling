import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    console.log('Hello! This is a static message.');
  };

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

