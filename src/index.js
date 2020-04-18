import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';

import { useStore } from './data/store';

import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';

import './styles.css';

export default function App() {
  const { launchGame, inGame } = useStore();

  const onClick = useCallback(() => {
    if (!inGame) launchGame();
  }, [inGame, launchGame]);

  return (
    <div className="main" onClick={onClick}>
      {!inGame ? <Welcome /> : <Game />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
