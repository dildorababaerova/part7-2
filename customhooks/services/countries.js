import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

const getCountry = async (name) => {
  if (!name) {
    return null;
  }

  try {
    const response = await axios.get(`${baseUrl}/name/${name}`);
    
    // Log the full API response data
    console.log('Full API response data:', response.data);

    // Get the countryData object from the response
    const countryData = response.data;

    // Log the countryData object
    console.log('Country data:', countryData);

    // Log the country name
    if (countryData && countryData.name) {
      console.log('Country name:', countryData.name.common); 
    } else {
      console.log('Name not found in countryData');
    }

    return {
      found: true,
      data: {
        name: countryData.name.common,
        capital: countryData.capital ? countryData.capital[0] : 'No capital',
        population: countryData.population,
        flag: countryData.flags.png //flag
      }
    };
  } catch (e) {
    console.error('Error fetching country:', e);
    return { found: false };
  }
};

export default { getCountry };
