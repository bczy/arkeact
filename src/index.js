import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { gameStore, GAME_STATES } from './stores/gameStore';

import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';
import { Levels } from './pages/Levels';
import { LevelDebrief } from './pages/LevelDebrief';
import { Settings } from './pages/Settings';
import { About } from './pages/About';

import './styles.css';

const Arkeact = ({ gameState }) => {
  switch (gameState) {
    case GAME_STATES.WELCOME:
      return <Welcome />;
    case GAME_STATES.LEVEL_CHOICE:
      return <Levels />;
    case GAME_STATES.GAME:
      return <Game />;
    case GAME_STATES.LEVEL_DEBRIEF:
      return <LevelDebrief />;
    case GAME_STATES.SETTINGS:
        return <Settings />;
    case GAME_STATES.ABOUT:
        return <About />;
    default:
      return <Welcome />;
  }
};

export default function App() {
  const [gameState, setGameState] = useState(GAME_STATES.WELCOME);
  useEffect(() => {
    const subs = gameStore.gameState.subscribe(setGameState);
    return () => subs.unsubscribe();
  }, []);

  return (
    <div className="main">
      <Arkeact gameState={gameState} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
