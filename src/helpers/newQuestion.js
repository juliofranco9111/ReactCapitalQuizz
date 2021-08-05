import { countries } from './data';

export const newQuestion = () => {
  const random = Math.random() * countries.length - 1;

  const randomCountry = Math.round(random);

  const wrongResponses = randomCapitals();

  const arrayResponses = [...wrongResponses, countries[randomCountry].capital];

  const list = arrayResponses.sort(function () {
    return Math.random() - 0.5;
  });

  return {
    country: countries[randomCountry].country,
    capital: countries[randomCountry].capital,
    responses: list,
  };
};

const randomCapitals = () => {
  let capitals = [];

  for (let index = 0; index < 3; index++) {
    const random = Math.random() * countries.length;
    const rounded = Math.round(random);
    capitals.push(countries[rounded].capital);
  }

  if (capitals.length > 0) {
    return capitals;
  } else {
    let capitals2 = [];
    for (let index = 0; index < 3; index++) {
      const random = Math.random() * (countries.length - 1);
      const rounded = Math.round(random);
      capitals2.push(countries[rounded].capital);
    }
    return capitals2;
  }
};
