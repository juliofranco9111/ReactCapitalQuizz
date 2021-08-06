import React, { useState } from 'react';
import iconMedal from '../images/medal.png';
import iconError from '../images/error.gif';
import { Question } from '../components/Question';
import { newQuestion } from '../helpers/newQuestion';
import { useHistory } from 'react-router-dom';

export const QuizzPage = () => {

  //const maxPoints = localStorage.getItem('maxPoints')

  const history = useHistory();

  const [error, setError] = useState(false);
  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState(newQuestion());

  const { country, responses, capital } = question;

  const returnPage = () => {
    history.push('/');
  };

  const nextQuestion = () => {
    const nextQ = newQuestion();
    setQuestion(nextQ);
  };

  const validate = (value) => {
    if (value === capital) {
      nextQuestion();
      setPoints(points + 100);
      localStorage.setItem('points', points + 100);

    } else {
      setError(true);
      setTimeout(() => {
        history.push('/game-over');
      }, 2000); 
    }
  };

  return (
    <>
      <div className='quizz__puntuation'>
        <button onClick={returnPage} className='quizz__btn_salir'>
          Salir
        </button>
        <div className='quizz__puntuation_number'>
          <div>{points}</div>
          <img src={iconMedal} alt='medal-icon' />
        </div>
      </div>
      <Question fn={validate} disabled={error} country={country} responses={responses} />
      {error && 
      
      <div className='animate__animated animate__fadeIn'>
      
      
      <img className='quizz__error_icon'  src={iconError} alt="error-icon" />
      
      <div className='quizz__error'>La respuesta es: {capital}</div>
      </div>
      }
      
    </>
  );
};
