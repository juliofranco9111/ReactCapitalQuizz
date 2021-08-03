import {countries} from './data';

export const newQuestion = () => {

    
    const random = Math.random() * countries.length;

    const randomCountry = Math.round(random);

    const wrongResponses = randomCapitals();
    

    return {
        country: countries[randomCountry].country,
        capital: countries[randomCountry].capital,
        responses: [countries[randomCountry].capital,...wrongResponses]
    }
}

const randomCapitals = () => {
    let capitals = [];

    for (let index = 0; index < 3; index++) {
        const random = Math.random() * countries.length;
        const rounded = Math.round(random);
        capitals.push( countries[rounded].capital )
        
    }

    return capitals;

}