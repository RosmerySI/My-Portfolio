import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../../../../components/Molecules/SearchBar/SearchBar';
import { WeatherCard } from './WeatherCard';
import './weather.scss';
import { CircularProgress } from '@mui/material';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('light');

    const API_KEY = '6b94edbee189be39c2d5b46cab0c5add';
    const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    const DEFAULT_CITY = 'Guadalajara, Jalisco';

    const fetchWeatherByLocation = async (latitude, longitude) => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL, {
                params: {
                    lat: latitude,
                    lon: longitude,
                    units: 'metric',
                    cnt: 3, 
                    appid: API_KEY,
                },
            });
            setWeatherData(response.data);           
            updateTheme(response.data.list[0].weather[0].icon);
        } catch (error) {
            console.error(error);
            alert('Error fetching weather data for your location.');
        } finally {
            setLoading(false);
        }
    };
    

    const fetchWeatherByCity = async (city) => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL, {
                params: {
                    q: city,
                    units: 'metric',
                    cnt: 3,
                    appid: API_KEY,
                },
            });
            setWeatherData(response.data);
            updateTheme(response.data.list[0].weather[0].icon);
        } catch (error) {
            console.error(error);
            alert('Error fetching weather data for the default city.');
        } finally {
            setLoading(false);
        }
    };

    const updateTheme = (icon) => {
        const isNight = icon.includes('n');
        const newTheme = isNight ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.classList.toggle('dark', isNight);
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherByLocation(latitude, longitude);
                },
                (error) => {
                    console.error(error);
                    alert('Unable to retrieve your location. Defaulting to Guadalajara.');
                    fetchWeatherByCity(DEFAULT_CITY);
                }
            );
        } else {
            alert('Geolocation is not supported by this browser. Defaulting to Guadalajara.');
            fetchWeatherByCity(DEFAULT_CITY);
        }
    };


    useEffect(() => {        
        getLocation();
    }, []); 

    return (
        <div className='weather-container'>
            <h1>Weather Forecast</h1>

            <SearchBar fetchData={fetchWeatherByCity} />

            {loading &&<CircularProgress />}

            {weatherData && <WeatherCard data={weatherData} />}
        </div>
    );
};

export default Weather;
