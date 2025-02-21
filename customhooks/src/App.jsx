import React, { useState } from 'react'; 

const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
}


const App = () => {
  const name = useField('text');
  const age = useField('data');
  const height = useField('number');
  const person= {
    firstName: 'Arto',
    lastName: 'Hellas'
  }

  return (
    <div>
      <h1>Greeting {person.firstName} {person.lastName}</h1>
      <form>
        <input {...name} placeholder="Name"/>
        <input {...age} placeholder="Age"/>
        <input {...height} placeholder="Height"/>
      </form>
    </div>
  );
}

export default App;