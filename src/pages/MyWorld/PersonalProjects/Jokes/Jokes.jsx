
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './jokes.scss'
import { CircularProgress } from '@mui/material';

const Jokes = () => {
    const [joke, setJoke] = useState('');
    const API_URL = 'https://v2.jokeapi.dev/joke/Programming';

    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const response = await axios.get(API_URL);
                const jokeData = response.data;
                
                const formattedJoke = jokeData.type === 'single' 
                    ? jokeData.joke 
                    : `${jokeData.setup} - ${jokeData.delivery}`;
                setJoke(formattedJoke);
            } catch (error) {
                console.error('Error fetching joke:', error);
            }
        };

        fetchJoke();
    }, []);

    return (
        <div className='jokes-container'>            
            <div className='jokes-card'>
            <h1>Programming Joke</h1>
            {joke ? <p>{joke}</p> : <CircularProgress />}
            <button className='addButton'  onClick={() => window.location.reload()}>Joke</button>
            </div>
        </div>
    );
};

export default Jokes;
