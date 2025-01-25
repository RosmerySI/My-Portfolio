import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Card } from '../../../../components/Molecules/Card/Card';
import { fetchItems } from '../../../../services/firebaseCRUD';
import moviePlaceholder from '../../../../assets/images/moviePlaceholder.jpg';
import './moviesSeries.scss';
import '../personalProjects.scss';
import { CircularProgress } from '@mui/material';





const MoviesSeries = () => {
    const [movies, setMovies] = useState([]);

    const [series, setSeries] = useState([]);

    const [loading, setLoading] = useState(true);

    const API_KEY = 'bbf3dcaf';

    const navigate = useNavigate()

    const fetchCover = async (item) => {
        const cachedCover = sessionStorage.getItem(item.title);
        if (cachedCover) return cachedCover;

        try {
            const response = await axios.get(`https://www.omdbapi.com/?t=${item.title}&apikey=${API_KEY}`);
            const coverUrl = response.data.Poster || moviePlaceholder;
            sessionStorage.setItem(item.title, coverUrl);
            return coverUrl;
        } catch (error) {
            console.error('Error fetching cover:', error);
            return moviePlaceholder;
        }
    };


    const loadData = async () => {
        setLoading(true);
        try {
            const moviesData = await fetchItems('movies');
            const seriesData = await fetchItems('series');

            const moviesWithCovers = await Promise.all(
                moviesData.map(async (movie) => ({
                    ...movie,
                    src: await fetchCover(movie),
                }))
            );

            const seriesWithCovers = await Promise.all(
                seriesData.map(async (serie) => ({
                    ...serie,
                    src: await fetchCover(serie),
                }))
            );

            setMovies(moviesWithCovers);
            setSeries(seriesWithCovers);
        } catch (error) {
            Swal.fire('Error', 'Hubo un problema al cargar los datos.', 'error');
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        loadData();
    }, []);

    
    const handleForm = (id,type) => {        
        navigate(`/world/personal_projects/form/${id}/${type}`);
    }

    return (
        <div className="movies-series-container">
            
            <div className='title-addButton-container'>
            <h2 >Movies & Series</h2>
            <button className='addButton' onClick={() => handleForm('create','movies_series')} >Add</button>
            </div>
           
            {loading ? (
                <CircularProgress />
            ) : (

                <div className="movies-series">
                    <div className="movies">
                    <Card title={'Movies'} items={movies}  handleForm={handleForm} loadData={loadData}/>
                    </div> 
                    <div className="series">                  
                    <Card title={'Series'} items={series}  handleForm={handleForm} loadData={loadData}/>
                    </div>                    
                </div>
            )}
        </div>
    );
};

export default MoviesSeries;
