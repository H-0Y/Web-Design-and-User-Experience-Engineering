import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
  const [isZero, setIsZero] = useState(true);
  const [count, setCount] = useState(0);

  function onReorder(){
    setCount(5);
    setIsZero(false);
  }
  return (
    <div className="app">

      <p className='app-desc'>Inventory: </p>

      <main className='app-main'>

        <button className='app-button' onClick= {() => {
          setCount(count+1);
          setIsZero(false);
        }}>+</button>

        <span className='app-display'>{count}</span>

        <button className='app-button' disabled={!count} onClick={() => {
          setCount(count-1);
          if(count == '1')setIsZero(true);
        }}>-</button>

        {isZero && <Reorder onReorder={onReorder}/>}
      </main>
      
    </div>
  );
}

export default App;
