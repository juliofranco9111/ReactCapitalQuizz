import { countries } from './data';

export const newQuestion = () => {
  const random = getRandomNumber(1, 197);

  const question = countries.find((country) => country.id === random);

  const { country, capital } = question;

  const wrongResponses = randomCapitals(capital);

  const arrayResponses = [...wrongResponses, capital];

  const responses = arrayResponses.sort(function () {
    return Math.random() - 0.5;
  });

  return {
    country,
    capital,
    responses,
  };
};

const randomCapitals = (capital) => {
  let capitals = [];

  while (capitals.length < 3) {
    const random = getRandomNumber(1, 197);
    const response = countries.find((country) => country.id === random);

    if (response.capital !== capital) {
      capitals.push(response.capital);
    }
  }

  return capitals;

  /*   for (let index = 0; index < 3; index++) {
    else{
      return
    }
  } */

  /* if (capitals.length > 0 && capitals.length === 3) {
    return capitals;
  } else {
    let capitals2 = [];
    for (let index = 0; index < 3; index++) {
      const random = Math.random() * (countries.length - 1);
      const rounded = Math.round(random);
      capitals2.push(countries[rounded].capital);
    }
    return capitals2;
  } */
};

const getRandomNumber = (min, max) => {
  const result = Math.random() * (max - min) + min;

  return Math.round(result);
};
