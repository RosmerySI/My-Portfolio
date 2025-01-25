import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import countriesCsv from './capitals.csv'; 
import './capitalsGame.scss'
import Swal from 'sweetalert2';
import { CircularProgress } from '@mui/material';

const CapitalsGame = () => {
    const [data, setData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [totalScore, setTotalScore] = useState(0);
    const [wasCorrect, setWasCorrect] = useState(null);
  
    
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
  
 
    useEffect(() => {
      fetch(countriesCsv)
        .then((response) => response.text())
        .then((csvText) => {
          Papa.parse(csvText, {
            header: true,
            complete: (result) => {
              const shuffledData = shuffleArray(result.data); // Mezcla aleatoria de datos
              setData(shuffledData);
            },
          });
        })
        .catch((error) => {
          console.error('Error loading CSV:', error);
        });
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (data.length === 0) return;
  
      // Obtén la pregunta actual
      const question = data[currentQuestionIndex];
      const correctAnswer = question.capital.trim().toLowerCase();
      const nextIndex = currentQuestionIndex + 1;
      
      if (userInput.trim().toLowerCase() === correctAnswer) {
        setTotalScore(totalScore + 1);
        setWasCorrect(true);
        Swal.fire('Correct!', 'success');
      } else {
        setWasCorrect(false);
        setTotalScore(0)
        setCurrentQuestionIndex(nextIndex)
        setUserInput(''); 
        Swal.fire(`Game over! Final best score: ${totalScore}`, 'error');
        return;
      }
  
      
      
      if (nextIndex < data.length) {
        setCurrentQuestionIndex(nextIndex);
      } else {
        Swal.fire('You completed the quiz! Great job!', 'success');
        setCurrentQuestionIndex(0); 
        setTotalScore(0);
      }  
      setUserInput(''); 
    };
  
    // if (wasCorrect === false) {
    //   window.location.reload();
    // }
  
    const question = data[currentQuestionIndex];
  
    return (
      <div id="app">
        {question ? (
          <form className="container" onSubmit={handleSubmit}>
            <div className="horizontal-container">
              <h3>
                Total Score: <span id="score">{totalScore}</span>
              </h3>
            </div>
  
            <h1 id="countryName">{question.country}</h1>
            <div className="answer-container">
              <input
                type="text"
                name="answer"
                id="userInput"
                placeholder="Enter the capital"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                autoFocus
                autoComplete="off"
              />
            </div>
            <button type="submit">
              SUBMIT
              {wasCorrect && <span className="checkmark">✔</span>}
            </button>
          </form>
        ) : (
          <div id="app">
            <CircularProgress />            
          </div>
        )}
      </div>
    );
};

export default CapitalsGame;
