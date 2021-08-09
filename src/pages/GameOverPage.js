import React from 'react';
import iconMedal from '../images/medal.png';
import fiesta from '../images/fiesta.gif';
import { useHistory, useParams } from 'react-router-dom';
import { recoverLevelData } from '../helpers/storeData';

const GameOverPage = () => {
  const nameUser = localStorage.getItem('nombre');
  const { level, points } = useParams();
  const maxPoints = recoverLevelData(level);

  const history = useHistory();

  const handleRedirection = () => {
    history.push(`/quizz/${level}`);
  };

  const goLevels = () => {
    history.push(`/level`);
  };
  return (
    <div className='gameover animate__animated animate__fadeIn'>
      {points === '0' ? (
        <h1 className='gameover__title'>Juego terminado</h1>
      ) : (
        <h1 className='gameover__title'>
          Felicidades {nameUser && nameUser !== '' && nameUser}
        </h1>
      )}
      <div>
        <img src={iconMedal} className='gameover__icon' alt='medal-icon' />
        <h1 className='gameover__points'>{points}</h1>
        {maxPoints > 0 && (
          <h2 className='gameover__best'>Mejor puntuación: {maxPoints}</h2>
        )}
      </div>
      <button onClick={goLevels} className='gameover__btn btn-secondary'>
        Capitulos
      </button>
      <button onClick={handleRedirection} className='gameover__btn'>
        Otra vez
      </button>

      {points > 0 && (
        <img src={fiesta} className='gameover__icon-fiesta' alt='fiesta' />
      )}
    </div>
  );
};

export default GameOverPage;
