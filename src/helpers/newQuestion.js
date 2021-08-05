import { countries } from './data';

export const newQuestion = () => {
  
  const number = getRandomNumber(1, 197);

  const question = getQuestion(number)

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

const getQuestion = ( number ) => {
  return countries.find((country) => country.id === number);
}

const getRandomNumber = (min, max) => {
  const result = Math.random() * (max - min) + min;

  return Math.round(result);
};
