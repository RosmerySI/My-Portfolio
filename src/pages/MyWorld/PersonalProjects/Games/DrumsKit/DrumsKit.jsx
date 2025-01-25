import React, { useEffect } from "react";
import tom1 from '../../../../../assets/sounds/drumskit/tom-1.mp3';
import tom2 from '../../../../../assets/sounds/drumskit/tom-2.mp3';
import tom3 from '../../../../../assets/sounds/drumskit/tom-3.mp3';
import tom4 from '../../../../../assets/sounds/drumskit/tom-4.mp3';
import crash from '../../../../../assets/sounds/drumskit/crash.mp3';
import snare from '../../../../../assets/sounds/drumskit/snare.mp3';
import kick from '../../../../../assets/sounds/drumskit/kick-bass.mp3';
import "./drumskit.scss";


const DrumsKit = () => {

  const playAudio = (url) => {   
    const audio = new Audio(url);
    audio.play();
  };

  const animation = (letter) => {
  
    const button = document.querySelector(`.${letter}`);
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => {
        button.classList.remove("pressed");
      }, 100);
    }
  };

  const gettingLetter = (letter) => {
    switch (letter) {
      case "w":
        playAudio(tom1);
        animation(letter);
        break;
      case "a":
        playAudio(tom2);
        animation(letter);
        break;
      case "s":
        playAudio(tom3);
        animation(letter);
        break;
      case "d":
        playAudio(tom4);
        animation(letter);
        break;
      case "j":
        playAudio(crash);
        animation(letter);
        break;
      case "k":
        playAudio(snare);
        animation(letter);
        break;
      case "l":
        playAudio(kick);
        animation(letter);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      gettingLetter(event.key);
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleClick = (letter) => {
    gettingLetter(letter);
  };

  return (
    <div>
      <h1 id="title">Drum 🥁 Kit ... Click the images or press the keys on the keyboard</h1>
      <div className="set">
        {['w', 'a', 's', 'd', 'j', 'k', 'l'].map((letter) => (
          <button
            key={letter}
            className={`${letter} drum`}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default DrumsKit;
