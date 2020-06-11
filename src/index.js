import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

import { gameStore, GAME_STATES } from './store/gameStore';

import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';
import { Levels } from './pages/Levels';
import { LevelDebrief } from './pages/LevelDebrief';

import './styles.css';

const ArkaReact = ({ gameState }) => {
  switch (gameState) {
    case GAME_STATES.WELCOME:
      return <Welcome />;
    case GAME_STATES.LEVEL_CHOICE:
      return <Levels />;
    case GAME_STATES.GAME:
      return <Game />;
    case GAME_STATES.LEVEL_DEBRIEF:
      return <LevelDebrief />;
    default:
      return <Welcome />;
  }
};

export default function App() {
  const [gameState, setGameState] = useState(GAME_STATES.WELCOME);
  useLayoutEffect(() => {
    const subs = gameStore.gameState.subscribe(setGameState);
    return () => subs.unsubscribe();
  }, []);

  return (
    <div className="main">
      <ArkaReact gameState={gameState} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
