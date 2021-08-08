import { countries } from './data';

export const newQuestion = (level) => {
  const data = getCountriesByLevel(level);

  const number = getRandomNumber(0, data.length - 1);

  const question = data[number];

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
};

const getRandomNumber = (min, max) => {
  const result = Math.random() * (max - min) + min;
  return Math.round(result);
};

const getCountriesByLevel = (level) => {
  switch (level) {
    case 1:
      return countries.filter((country) => country.area === 'América');
    case 2:
      return countries.filter((country) => country.area === 'Europa');
    case 3:
      return countries.filter((country) => country.area === 'Asia');
    case 4:
      return countries.filter((country) => country.area === 'África');
    case 5:
      return countries.filter((country) => country.area === 'Oceanía');
    case 6:
      return countries;

    default:
      break;
  }
};
