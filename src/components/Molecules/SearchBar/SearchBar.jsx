import React, { useState } from 'react';
import './searchBar.scss'

const SearchBar = ({ fetchData }) => {
    const [item, setItem] = useState('');

    const handleSearch = () => {
        if (item.trim() !== '') {
            fetchData(item);
        }
    };

    return (
        <div className='searchBar-container'>
            <input
                type="text"
                placeholder="Enter place"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                className='search-bar'             
            />
            <button onClick={handleSearch}  className='addButton'>🔎</button>
        </div>
    );
};

export default SearchBar;
