import React, { useEffect, useState } from "react";
import dice1 from '../../../../../assets/images/dice/dice1.png';
import dice2 from '../../../../../assets/images/dice/dice2.png';
import dice3 from '../../../../../assets/images/dice/dice3.png';
import dice4 from '../../../../../assets/images/dice/dice4.png';
import dice5 from '../../../../../assets/images/dice/dice5.png';
import dice6 from '../../../../../assets/images/dice/dice6.png';
import "./diceGame.scss";

const diceImages = [null, dice1, dice2, dice3, dice4, dice5, dice6];

const DiceGame = () => {

  const [randomNumberOne, setRandomNumberOne] = useState(6);

  const [randomNumberTwo, setRandomNumberTwo] = useState(6);

  const [result, setResult] = useState("Refresh Me");

  const rollDice = () => {

    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;

    setRandomNumberOne(num1);
    setRandomNumberTwo(num2);

    if (num1 === num2) {
      setResult("It is a match!");
    } else if (num1 > num2) {
      setResult("The winner is Player 1!");
    } else {
      setResult("The winner is Player 2!");
    }
  };

  useEffect(() => {
    rollDice()
  }, [])
  

  return (
    <div className="container">
      <h1 onClick={rollDice}>{result}</h1>

      <div className="dice">
        <p>Player 1</p>
        <img
          className="img1"
          src={diceImages[randomNumberOne]}
          alt={`Dice showing ${randomNumberOne}`}
        />
      </div>

      <div className="dice">
        <p>Player 2</p>
        <img
          className="img2"
          src={diceImages[randomNumberTwo]}
          alt={`Dice showing ${randomNumberTwo}`}
        />
      </div>

     
    </div>
  );
};

export default DiceGame;
