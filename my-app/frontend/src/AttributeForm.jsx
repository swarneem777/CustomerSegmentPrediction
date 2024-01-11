//Importing necessary dependencies
import React, { useState } from 'react';
import './Attribute.css'; 
import axios from "axios";


export const WineAttributesPage = ({onFormSwitch}) => {
  //Initializing the states
  const [sendResult, setSendResult] = useState(null);
  const [drinks, setDrinks] = useState({
    alcohol: 0,
    malic_acid: 0,
    ash: 0,
    ash_alcanity: 0,
    magnesium: 0,
    total_phenol: 0,
    flavanoids: 0,
    nonflavanoids: 0,
    proanthocyanins: 0,
    color_intensity: 0,
    hue: 0,
    OD280: 0,
    proline : 0,
  });

  const drinkHandleChange = (e) => {
    console.log('drinks', drinks, e.target.value)
    setDrinks({
      ...drinks,
      [e.target.name]: parseFloat(e.target.value)
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

  //sending a POST request to the server endpoint
  await axios.post('http://localhost:5000/predictwine', drinks)
    .then((response) => {
      console.log('response', response)
      setSendResult(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

  
  return (
    <div>
      <div className=''>
      <h1>Wine Attributes</h1>
      <h3>Enter the values</h3> 
      {/*Creating a form for 13 attributes*/}
      <form className='attribute-form' onSubmit={handleSubmit}>
        <label>
          Alcohol : 
          <input type="number"
                 value={drinks.alcohol}
                 onChange={drinkHandleChange} 
                 name='alcohol' 
                 placeholder='Enter Alcohol value' 
                 id='Alcohol' 
                />
        </label>
        <br />
        <label>
          Malic Acid : 
          <input type="number"
           value={drinks.malic_acid} 
           onChange={drinkHandleChange} 
           name='malic_acid' 
           placeholder='Enter Malic Acid value' 
           id='Malic' />
        </label>
        <br />
        <label>
          Ash : 
          <input type="number"
           value={drinks.ash} 
           onChange={drinkHandleChange} 
           name='ash' 
           placeholder='Enter Ash value' 
           id='Ash' />
        </label>
        <br />
        <label>
          Ash Alcanity : 
          <input type="number"
           value={drinks.ash_alcanity} 
           onChange={drinkHandleChange} 
           name='ash_alcanity' 
           placeholder='Enter Ash Alcanity value' 
           id='Ash Alcanity'/>
        </label>
        <br />
        <label>
          Magnesium : 
          <input type="number"
           value={drinks.magnesium} 
           onChange={drinkHandleChange} 
           name='magnesium' 
           placeholder='Enter Magnesium value' 
           id='Magnesium'/>
        </label>
        <br />
        <label>
          Total Phenols : 
          <input type="number"
           value={drinks.total_phenol} 
           onChange={drinkHandleChange} 
           name='total_phenol' 
           placeholder='Enter Phenols value' 
           id='Phenols'/>
        </label>
        <br />
        <label>
          Flavanoids : 
          <input type="number"
           value={drinks.flavanoids} 
           onChange={drinkHandleChange} 
           name='flavanoids' 
           placeholder='Enter Flavanoids value' 
           id='Flavanoids'/>
        </label>
        <br />
        <label>
          Nonflavanoid_Phenols : 
          <input type="number"
           value={drinks.nonflavanoids} 
           onChange={drinkHandleChange} 
           name='nonflavanoids' 
           placeholder='Enter Nonflavanoid_Phenols value' 
           id='Nonflavanoid_Phenols'/>
        </label>
        <br />
        <label>
          Proanthocyanins : 
          <input type="number"
           value={drinks.proanthocyanins} 
           onChange={drinkHandleChange} 
           name='proanthocyanins' 
           placeholder='Enter Proanthocyanins value' 
           id='Proanthocyanins'/>
        </label>
        <br />
        <label>
          Color_Intensity : 
          <input type="number"
           value={drinks.color_intensity} 
           onChange={drinkHandleChange} 
           name='color_intensity' 
           placeholder='Enter Color_Intensity value' 
           id='Color_Intensity'/>
        </label>
        <br />
        <label>
          Hue : 
          <input type="number"
           value={drinks.hue} 
           onChange={drinkHandleChange} 
           name='hue' 
           placeholder='Enter Hue value'
           id='Hue'/>
        </label>
        <br />
        <label>
          OD280 : 
          <input type="number"
           value={drinks.OD280} 
           onChange={drinkHandleChange} 
           name='OD280' 
           placeholder='Enter OD280 value' 
           id='OD280'/>
        </label>
        <br />
        <label>
          Proline : 
          <input type="number"
           value={drinks.proline} 
           onChange={drinkHandleChange} 
           name='proline' 
           placeholder='Enter Proline value' 
           id='Proline'/>
        </label>
        <br />
        <button type="submit">Predict</button>
        <h2>{sendResult ? sendResult : ''}</h2>
      </form>
    </div>
  </div>
  );
};
