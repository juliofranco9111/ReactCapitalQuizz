import React from 'react';

export const Question = ({ fn, country, responses = [], disabled = false }) => {
  return (
    <>
      <div className='question__container animated fadeIn'>
        <h1 className='quizz__h1'>¿Cuál es la capital de {country}?</h1>

        <div className='quizz__options animated fadeIn'>
          <button disabled={disabled} onClick={() => fn(responses[0])} className='quizz__option'>
            {responses[0]}
          </button>
          <button disabled={disabled} onClick={() => fn(responses[1])} className='quizz__option'>
            {responses[1]}
          </button>
          <button disabled={disabled} onClick={() => fn(responses[2])} className='quizz__option'>
            {responses[2]}
          </button>
          <button disabled={disabled} onClick={() => fn(responses[3])} className='quizz__option'>
            {responses[3]}
          </button>
        </div>
      </div>
    </>
  );
};
