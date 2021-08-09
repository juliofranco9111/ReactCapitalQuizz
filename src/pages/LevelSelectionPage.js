import React from 'react';
import { useHistory } from 'react-router-dom';
import { Levels } from '../components/Levels';
import { recoverLevelData } from '../helpers/storeData';

const LevelPage = () => {

  recoverLevelData(1)

  const areas = [
    { level: 1, area: 'América', points:recoverLevelData(1) },
    { level: 2, area: 'Europa', points:recoverLevelData(2) },
    { level: 3, area: 'Asia', points:recoverLevelData(3) },
    { level: 4, area: 'África', points:recoverLevelData(4) },
    { level: 5, area: 'Oceanía', points:recoverLevelData(5) },
    { level: 6, area: 'Todos', points:recoverLevelData(6) },
  ];

  const history = useHistory();

  const handleSelectLevel = (level) => {
    history.push(`/quizz/${level}`);
  };

  const goBack = () => {
    history.push('/')
  }

  return (
    <>
      <div className='level__container animated fadeIn faster'>
        {areas.map((object) => (
          <Levels key={object.level} fn={handleSelectLevel} object={object} />
          ))}
      </div>
          <button onClick={goBack} className="btn-secondary animated fadeIn">Atrás</button>
    </>
  );
};

export default LevelPage;
