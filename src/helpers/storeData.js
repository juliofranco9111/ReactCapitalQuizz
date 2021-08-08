export const storeLevelData = (level, points) => {
  const levelStored = localStorage.getItem(`level ${level}`);

  if (!levelStored) {
    localStorage.setItem(
      `level ${level}`,
      JSON.stringify({ maxPoints: points })
    );
  } else {
    const { maxPoints } = JSON.parse(levelStored);

    if (points > maxPoints) {
      localStorage.setItem(
        `level ${level}`,
        JSON.stringify({ maxPoints: points })
      );
    }
  }
};


export const recoverLevelData = (level) => {
  const data = JSON.parse(localStorage.getItem(`level ${level}`));

  if(data){
      return data.maxPoints;
  }else{
      return 0
  }

  
};
