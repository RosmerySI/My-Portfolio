import React, { useState, useEffect } from 'react';
import { fetchItems} from '../../../../services/firebaseCRUD';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import book_image from '../../../../assets/images/book_image.jpg';
import './library.scss';
import { Card } from '../../../../components/Molecules/Card/Card';
import { CircularProgress } from '@mui/material';


const Library = () => {

    const [books, setBooks] = useState([]); 

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

   
    const fetchBookCover = async (book, index) => {
        const cachedCover = sessionStorage.getItem(book.title);
        if (cachedCover) {
            updateBookCover(index, cachedCover);
            return;
        }

        const formattedTitle = book.title.toLowerCase().replace(/ /g, '+');
        const url = `https://openlibrary.org/search.json?title=${formattedTitle}`;

        try {
            const response = await axios.get(url);
            const imageResult = response.data.docs.find(
                (data) => data.title.toLowerCase() === book.title.toLowerCase()
            );

            if (imageResult && imageResult.isbn && imageResult.isbn.length > 0) {
                const isbn = imageResult.isbn[0];
                const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
                sessionStorage.setItem(book.title, coverUrl);
                updateBookCover(index, coverUrl);
            } else {
                updateBookCover(index, image);
            }
        } catch (error) {
            console.error('Error fetching cover:', error);
            updateBookCover(index, book_image);
        }
    };

    
    const updateBookCover = (index, src) => {
        setBooks((prevBooks) => {
            const updatedBooks = [...prevBooks];
            updatedBooks[index] = { ...updatedBooks[index], src };
            return updatedBooks;
        });
    };

    
    const loadData = async () => {
        setLoading(true);
        Swal.fire({
            title: 'Cargando libros...',
            text: 'Por favor espera mientras se cargan los datos.',
            icon: 'info',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const booksData = await fetchItems('books');
            const booksWithDefaultCover = booksData.map((book) => ({
                ...book,
                src: book_image, 
            }));

            setBooks(booksWithDefaultCover);

            booksWithDefaultCover.forEach((book, index) => {
                fetchBookCover(book, index);
            });

            Swal.close();
        } catch (error) {
            console.error('Error loading books:', error);
            Swal.fire('Error', 'Hubo un problema al cargar los libros.', 'error');
        } finally {
            setLoading(false);
        }
    };

   

    const handleForm = (id,type) => {
        navigate(`/world/personal_projects/form/${id}/${type}`);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="library_container">
    
            <div className='title-addButton-container'>
            <h2>My Library</h2>
            <button className='addButton' onClick={() => handleForm('create','books')}>Add</button>
            </div>
          
            {loading ? (
                <CircularProgress />
            ) : (
                <div className="library">
                <Card title={''} items={books} handleForm={handleForm} loadData={loadData}/>
                </div>
            )}
        </div>
    );
};

export default Library;
