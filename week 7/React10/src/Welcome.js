import React from 'react';

function Welcome() {
  const greet = (message) => {
    alert(message);
  };

  return (
    <button onClick={() => greet('Welcome!')}>Say Welcome</button>
  );
}

export default Welcome;
