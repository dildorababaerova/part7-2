import React, { useState, useEffect } from 'react';
import countryService from '../services/countries';  //Importing the service

// Custom hook for input field
const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange
  };
};

// Custom hook for getting country data
const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (!name) return;

    // Get country data from the service
    countryService.getCountry(name)
      .then(country => setCountry(country))
      .catch(() => setCountry({ found: false }));  // If error, set found to false
  }, [name]);

  return country;
};

// Component for displaying country data
const Country = ({ country }) => {
  if (!country) {
    return null;
  }

  if (!country.found) {
    return <div>not found...</div>;  // If country not found
  }

  return (
    <div>
      <h3>{country.data.name}</h3>
      <div>capital: {country.data.capital}</div>
      <div>population: {country.data.population}</div>
      <img src={country.data.flag} height="100" alt={`flag of ${country.data.name}`} />  {/* Display a flag */}
    </div>
  );
};

// Main component
const App = () => {
  const nameInput = useField('text');  // Custom hook for input field
  const [name, setName] = useState('');  // Hook for storing the name of the country
  const country = useCountry(name);  // Custom hook for getting country data

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);  //  Set the name of the country
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />  {/* Input for set the name of country */}
        <button>find</button>  {/* button for search country */}
      </form>
      <Country country={country} />  {/* Display data about country */}
    </div>
  );
};

export default App;
