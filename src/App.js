import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StartPage } from './pages/StartPage';
import { QuizzPage } from './pages/QuizzPage';
import './styles.css';
import { GameOverPage } from './pages/GameOverPage';

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <StartPage />
          </Route>

          <Route exact path='/quizz'>
            <QuizzPage />
          </Route>
          <Route exact path='/game-over'>
            <GameOverPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
