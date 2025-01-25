import React, { useState } from 'react';
import DrumsKit from './DrumsKit/DrumsKit';
import SimonGame from './SimonGame/SimonGame';
import DiceGame from './DiceGame/DiceGame';
import CapitalsGame from './CapitalsGame/CapitalsGame';
import Modal from './Modal/Modal';
import drum from '../../../../assets/images/drumskit/tom1.png';
import dice from '../../../../assets/images/dice/dice6.png';
import simon from '../../../../assets/images/simon.png';
import capitals from '../../../../assets/images/capitals.jpg';
import  './games.scss';


const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleHover = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  return (
    <>
    <h2>Click on a Game!!!</h2>
    <div className='games-container'>
      
      <div 
        onClick={() => handleHover(<DrumsKit />)} 
        className='images-container'
      >
        <img className='game-images' src={drum} alt='drum' />
        <h3>Drums Kit</h3>
      </div>

      <div 
        onClick={() => handleHover(<SimonGame />)} 
       className='images-container'
      >
        <img className='game-images' src={simon} alt='drum' />
        <h3>Simon Game</h3>
      </div>

      <div 
        onClick={() => handleHover(<DiceGame />)} 
        className='images-container'
      >
        <img className='game-images' src={dice} alt='drum' />
        <h3>Dice Game</h3>
      </div>

      <div 
        onClick={() => handleHover(<CapitalsGame />)} 
        className='images-container'
      >
        <img className='game-images' src={capitals} alt='drum' />
        <h3>Capitals Game</h3>
      </div>

      {selectedGame && (
        <Modal onClose={closeModal}>
          {selectedGame}
        </Modal>
      )}
    </div>
    </>
  );
};

export default Games;
