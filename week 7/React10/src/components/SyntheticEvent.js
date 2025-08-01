import React from 'react';

function SyntheticEvent() {
  const handleClick = (e) => {
    e.preventDefault();
    alert('I was clicked');
  };

  return (
    <button onClick={handleClick}>Click Me (Synthetic Event)</button>
  );
}

export default SyntheticEvent;

