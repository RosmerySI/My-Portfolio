import React, { useState } from 'react';
import UserList from './UserList/UserList';
import TotalCount from './TotalCount/TotalCount';
import FamilyForm from './FamilyForm/FamilyForm';
import CountryForm from './CountryForm/CountryForm';
import WorldMap from './WorldMap/WorldMap';
import './familyTravelTracker.scss';

const FamilyTravelTracker = () => {

    const [users, setUsers] = useState([
        { id: 1, name: 'Mery', color: 'pink' },
        { id: 2, name: 'Yosba', color: 'blue' },
    ]);

    const [currentUser, setCurrentUser] = useState(users[0]);
    
    const [visitedCountries, setVisitedCountries] = useState({
        1: { "Mexico": "pink", "Cuba": "pink" },
        2: { "Mexico": "blue", "Cuba": "blue" },
    });

    const handleAddUser = (name, color) => {
        const newUser = { id: users.length + 1, name, color };

        setUsers([...users, newUser]);
        setVisitedCountries((prev) => ({
            ...prev,
            [newUser.id]: {},
        }));

        setCurrentUser(newUser);
    };


    const handleAddCountry = (countryName) => {
        setVisitedCountries((prev) => ({
            ...prev,
            [currentUser.id]: {
                ...prev[currentUser.id],
                [countryName]: currentUser.color,
            },
        }));
    };

    return (
        <div className="app-container">
            <h1>Travel Tracker</h1>
            <div className='family-country-container'>
            <UserList
                users={users}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                visitedCountries={visitedCountries}
                setVisitedCountries={setVisitedCountries}
            />
            <CountryForm onAddCountry={handleAddCountry} />            
            <FamilyForm onAddUser={handleAddUser} />
            
            </div>      
            <WorldMap visitedCountries={visitedCountries[currentUser.id] || {}} />
                    
        </div>
    );
};

export default FamilyTravelTracker;
