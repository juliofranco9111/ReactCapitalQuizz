import React from 'react';
import './styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import RouterApp from './Router';

//import { StartPage } from './pages/StartPage';
//import { QuizzPage } from './pages/QuizzPage';
//import { GameOverPage } from './pages/GameOverPage';

function App() {
  return (
    <div className='container animated fadeIn'>
        <RouterApp />
    </div>
  );
}

export default App;
