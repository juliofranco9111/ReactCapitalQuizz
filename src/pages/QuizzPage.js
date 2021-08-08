import React, { useState } from 'react';
import iconMedal from '../images/medal.png';
import iconError from '../images/error.gif';
import { Question } from '../components/Question';
import { newQuestion } from '../helpers/newQuestion';
import { useHistory, useParams } from 'react-router-dom';
import { storeLevelData } from '../helpers/storeData';

const QuizzPage = () => {
  const history = useHistory();
  const {level} = useParams();
  const levelSelected = parseInt(level);


  const [error, setError] = useState(false);
  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState(newQuestion(levelSelected));

  const { country, responses, capital } = question;

  const returnPage = () => {
    history.push('/');
  };

  const nextQuestion = () => {
    const nextQ = newQuestion(levelSelected);
    setQuestion(nextQ);
  };

  const validate = (value) => {
    if (value === capital) {
      nextQuestion();
      setPoints(points + 100);
    } else {
      setError(true);
      storeLevelData(levelSelected, points)
      setTimeout(() => {
        history.push(`/game-over/${level}/${points}`);
      }, 2000);
    }
  };

  return (
    <>
      <div className='quizz__puntuation'>
        <div className='quizz__button'>
          <button onClick={returnPage} className='btn-secondary'>
            Salir
          </button>
        </div>
        <div className='quizz__puntuation_number'>
          <div>{points}</div>
          <img src={iconMedal} alt='medal-icon' />
        </div>
      </div>
      <Question
        fn={validate}
        disabled={error}
        country={country}
        responses={responses}
      />
      {error && (
        <div className='animate__animated animate__fadeIn'>
          <img className='quizz__error_icon' src={iconError} alt='error-icon' />

          <div className='quizz__error'>La respuesta es: {capital}</div>
        </div>
      )}
    </>
  );
};

export default QuizzPage;
