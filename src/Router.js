import React, { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const QuizzPage = lazy(() => import('./pages/QuizzPage'));
const StartPage = lazy(() => import('./pages/StartPage'));
const GameOverPage = lazy(() => import('./pages/GameOverPage'));
const LevelPage = lazy(() => import('./pages/LevelSelectionPage'))

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Suspense
          fallback={
            <Loader
              type='BallTriangle'
              color='#00BFFF'
              height={80}
              width={80}
            />
          }>
          <Route exact path='/' component={StartPage} />
          <Route exact path='/level' component={LevelPage} />
          <Route exact path='/quizz/:level' component={QuizzPage} />
          <Route exact path='/game-over' component={GameOverPage} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default RouterApp;
