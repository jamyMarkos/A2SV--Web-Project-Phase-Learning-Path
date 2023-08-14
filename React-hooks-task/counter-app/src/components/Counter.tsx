import { useState, useEffect, useRef } from 'react';

function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0); 
  const buttonRef = useRef<HTMLButtonElement>(null); 

  useEffect(() => {
    document.title = `Count: ${count}`; 
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button className='op' onClick={handleIncrement}>+</button>
      <button className='op' onClick={handleDecrement}>-</button>
      <button ref={buttonRef} style={{ padding: '5px'}}>Click me</button>
    </div>
  );
}

export default Counter;