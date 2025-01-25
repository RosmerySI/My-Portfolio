import React, { useState, useEffect } from "react";
import blue from '../../../../../assets/sounds/simon/blue.mp3';
import green from '../../../../../assets/sounds/simon/green.mp3';
import red from '../../../../../assets/sounds/simon/red.mp3';
import wrong from '../../../../../assets/sounds/simon/wrong.mp3';
import yellow from '../../../../../assets/sounds/simon/yellow.mp3';
import "./simonGame.scss";

const buttonColours = ["red", "blue", "green", "yellow"];

const soundMap = {
  red,
  blue,
  green,
  yellow,
  wrong,
};

const SimonGame = () => {
  const [gamePattern, setGamePattern] = useState([]);
  const [userClickedPattern, setUserClickedPattern] = useState([]);
  const [level, setLevel] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started && userClickedPattern.length > 0) {
      checkAnswer(userClickedPattern.length - 1);
    }
  }, [userClickedPattern]);

  const startGame = () => {
    if (!started) {
      setLevel(0);
      setGamePattern([]);
      nextSequence();
      setStarted(true);
    }
  };

  const handleButtonClick = (colour) => {
    const newUserPattern = [...userClickedPattern, colour];
    setUserClickedPattern(newUserPattern);
    playSound(colour);
    animatePress(colour);
  };

  const checkAnswer = (currentLevel) => {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(() => {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      document.body.classList.add("game-over");
      setTimeout(() => {
        document.body.classList.remove("game-over");
      }, 200);
      resetGame();
    }
  };

  const nextSequence = () => {
    setUserClickedPattern([]);
    const nextLevel = level + 1;
    setLevel(nextLevel);

    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    setGamePattern((prevPattern) => [...prevPattern, randomChosenColour]);

    setTimeout(() => {
      playSound(randomChosenColour);
      animatePress(randomChosenColour);
    }, 500);
  };

  const playSound = (name) => {
    const audio = new Audio(soundMap[name]);
    audio.play();
  };

  const animatePress = (currentColor) => {
    const button = document.getElementById(currentColor);
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 100);
  };

  const resetGame = () => {
    setStarted(false);
    setLevel(0);
    setGamePattern([]);
    setUserClickedPattern([]);
  };

  return (
    <div className="simon-container">
      <h1>{started ? `Level ${level}` : "Press Any Key to Start"}</h1>
      <div className="row">
        <div id="green" className="btn green" onClick={() => handleButtonClick("green")} />
        <div id="red" className="btn red" onClick={() => handleButtonClick("red")} />
      </div>
      <div className="row">
        <div id="yellow" className="btn yellow" onClick={() => handleButtonClick("yellow")} />
        <div id="blue" className="btn blue" onClick={() => handleButtonClick("blue")} />
      </div>
      {!started && <button className="start-button" onClick={startGame}>Start Game</button>}
    </div>
  );
};

export default SimonGame;
