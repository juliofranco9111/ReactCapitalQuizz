import React from 'react';
import { returnRoman } from '../helpers/returnRoman';
import iconMedal from '../images/medal.png';

export const Levels = ({ object, fn }) => {
  const { level, area, points } = object;


  return (
    <div onClick={() => {fn(level)}} className='btn-secondary level__option'>
      <div>
        <h1 className='level__title'>{returnRoman(level)}</h1>
        <p>{area}</p>
      </div>

      <div>
        <img className='level__icon_medal' src={iconMedal} alt='medal-icon' width='40' height='40' />
        <p>{points}</p>
      </div>
    </div>
  );
};
