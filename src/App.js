import React, { useState } from 'react';

import Game from './components/Game';
import './App.css';

function App() {
  const [gameCount, setGameCount] = useState(0);

  function increaseScore() {
    setGameCount((gameCount) => (
      gameCount += 1
    ))
  }


  return (

    <div className="App">
      <header className="App-header">
        <p>Game Count: {gameCount}</p>
      </header>
      <main>

            <Game score={increaseScore}/>

      </main>
    </div>

  );
}

export default App;
