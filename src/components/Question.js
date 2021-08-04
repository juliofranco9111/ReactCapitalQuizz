import React from 'react';

export const Question = ({ fn, country, responses = [] }) => {
  return (
    <>
      <div className='container '>
        <h1 className='quizz__h1'>¿Cuál es la capital de {country}?</h1>

        <div className='quizz__options animate__animated animate__fadeIn'>
          <button onClick={() => fn(responses[0])} className='quizz__option'>
            {responses[0]}
          </button>
          <button onClick={() => fn(responses[1])} className='quizz__option'>
            {responses[1]}
          </button>
          <button onClick={() => fn(responses[2])} className='quizz__option'>
            {responses[2]}
          </button>
          <button onClick={() => fn(responses[3])} className='quizz__option'>
            {responses[3]}
          </button>
        </div>
      </div>
    </>
  );
};
