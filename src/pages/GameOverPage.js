import React from 'react';
import iconMedal from '../assets/medal.png';
import fiesta from '../assets/fiesta.gif';
import { useHistory } from 'react-router-dom';

export const GameOverPage = () => {
  const nameUser = localStorage.getItem('nombre');

  const points = localStorage.getItem('points');
  const maxPoints = localStorage.getItem('maxPoints');

  const history = useHistory();

  const handleRedirection = () => {
    history.push('/quizz');
    
    if (!maxPoints || points > maxPoints) {
        localStorage.setItem('maxPoints', points);
    }
    
    localStorage.removeItem('points');
  };
  return (
    <div className='gameover'>
        {
            !points || points === 0 ?
            <h1 className='gameover__title'>Juego terminado</h1>
           :
           <h1 className='gameover__title'>Felicidades {nameUser && nameUser}</h1>
        }
      <div>
        <img src={iconMedal} class='gameover__icon' alt='medal-icon' />
        <h1 className='gameover__points'>{!points ? '0' : points}</h1>

        <h2 className='gameover__best'>Mejor puntuación: {!maxPoints ? points : maxPoints}</h2>
      </div>
      <button onClick={handleRedirection} className='gameover__btn'>
        Otra vez
      </button>

      <img src={fiesta} className='gameover__icon-fiesta' alt='fiesta' />
    </div>
  );
};
