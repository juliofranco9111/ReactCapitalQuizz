import React from 'react';
import { useHistory } from 'react-router-dom';
import { Levels } from '../components/Levels';

const LevelPage = () => {
  const areas = [
    { level: 1, area: 'América', points: 0 },
    { level: 2, area: 'Europa', points: 0 },
    { level: 3, area: 'Asia', points: 0 },
    { level: 4, area: 'África', points: 0 },
    { level: 5, area: 'Oceanía', points: 0 },
    { level: 6, area: 'Todos', points: 0 },
  ];

  const history = useHistory();

  const handleSelectLevel = (level) => {
    console.log(level);
    history.push(`/quizz/${level}`);
  };

  const goBack = () => {
    history.push('/')
  }

  return (
    <>
      <div className='level__container'>
        {areas.map((object) => (
          <Levels key={object.level} fn={handleSelectLevel} object={object} />
          ))}
      </div>
          <button onClick={goBack} className="btn-secondary">Atrás</button>
    </>
  );
};

export default LevelPage;
