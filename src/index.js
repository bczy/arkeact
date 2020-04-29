import React from 'react';
import ReactDOM from 'react-dom';

import { useGameStore } from './data/stores/game';

import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';

import './styles.css';

export default function App() {
  const { inGame } = useGameStore((state) => state);

  return <div className="main">{!inGame ? <Welcome /> : <Game />}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
