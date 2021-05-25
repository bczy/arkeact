import React,{ useState,useEffect,Suspense } from 'react';
import ReactDOM from 'react-dom';

import { gameStore, GAME_STATES } from './stores/gameStore';

import { Game } from './pages/Game';
import { Levels } from './pages/Levels';
import { LevelDebrief } from './pages/LevelDebrief';
import { Settings } from './pages/Settings';
import { About } from './pages/About';

import './styles.css';

const FallBack = () => <div className="d-flex justify-content-center my-3">
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
</div>;


function GameState({gameState}){
    switch (gameState) {
        case GAME_STATES.WELCOME:
            const Welcome = React.lazy(() => import('./pages/Welcome'));
            return <Welcome />;
        case GAME_STATES.LEVEL_CHOICE:
            return React.lazy(() => import('./pages/Levels'));
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

}
const Arkeact = ({ gameState }) => {
    return <Suspense fallback={FallBack()}>
        <GameState gameState={gameState}/>
    </Suspense>;
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
