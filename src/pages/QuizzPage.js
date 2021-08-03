import React from 'react';
import { Question } from '../components/Question';
import iconMedal from '../assets/medal.png';
import {newQuestion} from '../helpers/newQuestion'

export const QuizzPage = () => {

  const question = newQuestion();

  const {country, responses, capital} = question;


  return (
    <>
      <div className='quizz__puntuation'>
        <button className='quizz__btn_salir'>Salir</button>
        <div className='quizz__puntuation_number'>
          <div>0</div>
          <img src={iconMedal} alt='medal-icon' />
        </div>
      </div>
      <Question  country={country} responses={responses}/>
      La respuesta es: {capital}
      <button className='profile__btn'>Confirmar</button>
    </>
  );
};
