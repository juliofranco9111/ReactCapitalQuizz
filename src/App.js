import React, { lazy, Suspense } from 'react';
import './styles.css';
import './animate.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
const QuizzPage = lazy(() => import('./pages/QuizzPage'));
const StartPage = lazy(() => import('./pages/StartPage'));
const GameOverPage = lazy(() => import('./pages/GameOverPage'));

//import { StartPage } from './pages/StartPage';
//import { QuizzPage } from './pages/QuizzPage';
//import { GameOverPage } from './pages/GameOverPage';

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Suspense fallback={<Loader type="BallTriangle" color="#00BFFF" height={80} width={80}/>}>
            <Route exact path='/' component={StartPage} />
            <Route exact path='/quizz' component={QuizzPage} />
            <Route exact path='/game-over' component={GameOverPage} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
