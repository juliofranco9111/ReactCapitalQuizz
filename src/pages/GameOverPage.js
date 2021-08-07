import React from 'react';
import iconMedal from '../images/medal.png';
import fiesta from '../images/fiesta.gif';
import { useHistory } from 'react-router-dom';



const GameOverPage = () => {
  const nameUser = localStorage.getItem('nombre');

  const points = localStorage.getItem('points');
  const maxPoints = localStorage.getItem('maxPoints');

  const history = useHistory();

  const handleRedirection = () => {
    
    if (maxPoints==='null' || points > maxPoints) {
      localStorage.setItem('maxPoints', points);
    }
    
    localStorage.removeItem('points');
    history.push('/quizz');
  };
  return (
    <div className='gameover animate__animated animate__fadeIn'>
        {
            !points || points === 0 ?
            <h1 className='gameover__title'>Juego terminado</h1>
           :
           <h1 className='gameover__title'>Felicidades {(nameUser && nameUser !== '') && nameUser}</h1>
        }
      <div>
        <img src={iconMedal} className='gameover__icon' alt='medal-icon' />
        <h1 className='gameover__points'>{!points ? '0' : points}</h1>
        {
         (maxPoints && maxPoints !== 'null') && 
          <h2 className='gameover__best'>Mejor puntuación: {!maxPoints || maxPoints === 'null' || points > maxPoints ? points : maxPoints}</h2>
        }
      </div>
      <button onClick={handleRedirection} className='gameover__btn btn-secondary'>
        Capitulos
      </button>
      <button onClick={handleRedirection} className='gameover__btn'>
        Otra vez
      </button>
      

     { points > 0 &&
      <img src={fiesta} className='gameover__icon-fiesta' alt='fiesta' />}
    </div>
  );
};

export default GameOverPage;