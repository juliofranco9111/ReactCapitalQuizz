import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loader } from './components/Loader';
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
            <Loader/>
          }>
          <Route exact path='/' component={StartPage} />
          <Route exact path='/level' component={LevelPage} />
          <Route exact path='/quizz/:level' component={QuizzPage} />
          <Route exact path='/game-over/:level/:points' component={GameOverPage} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default RouterApp;
