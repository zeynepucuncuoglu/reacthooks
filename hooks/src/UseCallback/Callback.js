import React, { useState, useCallback } from 'react';


const Child = ({ onClick }) => {
  console.log('Child rendered');
  return (
    <button onClick={onClick}>Click me</button>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);
  const [anotherState, setAnotherState] = useState(false);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <Child onClick={handleClick} />
      <button onClick={() => setAnotherState(!anotherState)}>
        Toggle State
      </button>
    </div>
  );
};

export default Parent;
