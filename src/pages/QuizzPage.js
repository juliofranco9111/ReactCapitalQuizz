import React, { useState } from 'react';
import { Question } from '../components/Question';
import iconMedal from '../assets/medal.png';
import { newQuestion } from '../helpers/newQuestion';
import { useHistory } from 'react-router-dom';

export const QuizzPage = () => {
  const history = useHistory();

  const [question, setQuestion] = useState(newQuestion());
  const [error, setError] = useState(false);

  const [points, setPoints] = useState(0);

  console.log(question);

  const { country, responses, capital } = question;

  const nextQuestion = () => {
    const nextQ = newQuestion();
    setQuestion(nextQ);
  };

  const validate = (value) => {
    if (value === capital) {
      nextQuestion();
      setPoints( points + 10 )
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
        <button className='quizz__btn_salir'>Salir</button>
        <div className='quizz__puntuation_number'>
          <div>{points}</div>
          <img src={iconMedal} alt='medal-icon' />
        </div>
      </div>
      <Question fn={validate} country={country} responses={responses} />
      {error && <div>La respuesta es: {capital}</div>}
      {/* <button onClick={validate} className='profile__btn'>
        Confirmar
      </button> */}
    </>
  );
};
