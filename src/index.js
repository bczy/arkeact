import React from 'react';
import ReactDOM from 'react-dom';

import { useGameStore } from './data/stores/game';
import { useLevelStore } from './data/stores/level';

import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';

import './styles.css';

export default function App() {
  const { inGame } = useGameStore((state) => state);

  const { tiles } = useLevelStore();
  return (
    <div className="main">
      {tiles.length}
      {!inGame ? <Welcome /> : <Game />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
