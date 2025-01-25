import React, { useState } from 'react';
import  './countryForm.scss';

const CountryForm = ({ onAddCountry }) => {
    const [countryName, setCountryName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (countryName.trim()) {
            onAddCountry(countryName.trim()); 
            setCountryName('');
        } else {
            alert('Please enter a valid country name.');
        }
    };

    return (
        <form className='add-country-container' onSubmit={handleSubmit}>
            <h2>Add a Country</h2>
            <input
                type="text"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Enter country name"
                className='input-style'
                style={{width:'100%',height:'5vh', borderRadius:'5px',border:'solid 1px goldenrod'}}
            />
            <button  className='addButton' type="submit">Add</button>
        </form>
    );
};

export default CountryForm;
