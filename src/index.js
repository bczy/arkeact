import React from 'react';
import ReactDOM from 'react-dom';

import { useStore } from './data/store';

import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';

import './styles.css';

export default function App() {
  const { inGame } = useStore((state) => state);
  return <div className="main">{!inGame ? <Welcome /> : <Game />}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
