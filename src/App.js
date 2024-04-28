import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(5);

  const Increment = () => {
if(count<20)
    setCount(count + 1);
  };

  const Decrement = () => {
    if(count>0)
    setCount(count - 1); 
  };

  return (
    <>
      <h1>My count is {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}

export default App;
