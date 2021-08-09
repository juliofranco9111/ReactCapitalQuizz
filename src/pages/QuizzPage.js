import React, { useState } from 'react';
import iconMedal from '../images/medal.png';
import { Question } from '../components/Question';
import { newQuestion } from '../helpers/newQuestion';
import { useHistory, useParams } from 'react-router-dom';
import { storeLevelData } from '../helpers/storeData';

const QuizzPage = () => {
  const history = useHistory();
  const { level } = useParams();
  const levelSelected = parseInt(level);

  const [error, setError] = useState(false);
  const [trueAnswer, setTrueAnswer] = useState(false);
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
      setPoints(points + 100);
      setTrueAnswer(true);
      setTimeout(() => {
        setTrueAnswer(false);
        nextQuestion();
      }, 1000);
    } else {
      setError(true);
      storeLevelData(levelSelected, points);
      setTimeout(() => {
        history.push(`/game-over/${level}/${points}`);
      }, 2000);
    }
  };

  return (
    <div className='quizz__container'>
      <div className='quizz__puntuation animated fadeIn'>
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
        <div className='animated fadeIn'>
          <h1 className='animated pulse infinite quizz__error_icon'>❌</h1>

          <div className='quizz__error'>
            <h2>La respuesta es: {capital}</h2>
          </div>
        </div>
      )}
      {trueAnswer && (
        <div className='animated fadeIn'>
          <h1 className='animated pulse infinite quizz__error_icon true'>✔</h1>
        </div>
      )}
    </div>
  );
};

export default QuizzPage;
