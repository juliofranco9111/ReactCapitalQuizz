import React from 'react';


export const Question = ({country, responses=[] }) => {
  return (
    <>
      <div className='quizz__container'>
        <h1 className='quizz__h1'>¿Cuál es la capital de {country}?</h1>

        <div className='quizz__options'>
          <button className='quizz__option'>{responses[0]}</button>
          <button className='quizz__option'>{responses[1]}</button>
          <button className='quizz__option'>{responses[2]}</button>
          <button className='quizz__option'>{responses[3]}</button>
        </div>
      </div>
    </>
  );
};
