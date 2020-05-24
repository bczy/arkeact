import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';
import { gameStore } from './store/gameStore';

import './styles.css';

export default function App() {
  const [inGame, setInGame] = useState(false);
  useLayoutEffect(() => {
    const subs = gameStore.inGame.subscribe(setInGame);

    return () => subs.unsubscribe();
  }, []);

  return <div className="main">{!inGame ? <Welcome /> : <Game />}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
