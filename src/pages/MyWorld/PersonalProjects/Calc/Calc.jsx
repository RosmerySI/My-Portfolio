import React, { useState } from "react";
import gif from '../../../../assets/images/gif.gif'
import "./calc.scss";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState("");
  const [secondaryScreen, setSecondaryScreen] = useState("");
  const [showGif, setShowGif] = useState(false);

  const handleButtonClick = (value) => {
    setScreenValue(screenValue + value);
  };

  const clean = () => {
    setScreenValue("");
    setSecondaryScreen("");
    setShowGif(false);
  };

  const calculate = () => {
    try {
      const result = eval(screenValue);
      if (isNaN(result)) {
        setShowGif(true);
      } else {
        setSecondaryScreen(screenValue);
        setScreenValue(result.toString());
      }
    } catch (error) {
      setShowGif(true);
    }
  };

  const sqrt = () => {
    try {
      const result = Math.sqrt(parseFloat(screenValue));
      if (isNaN(result)) {
        setShowGif(true);
      } else {
        setScreenValue(result.toFixed(4));
      }
    } catch (error) {
      setShowGif(true);
    }
  };

  const percent = () => {
    try {
      const result = parseFloat(screenValue) / 100;
      setScreenValue(result.toString());
    } catch (error) {
      setShowGif(true);
    }
  };

  const plusMinus = () => {
    try {
      const result = -parseFloat(screenValue);
      setScreenValue(result.toString());
    } catch (error) {
      setShowGif(true);
    }
  };

  const retro = () => {
    setScreenValue(screenValue.slice(0, -1));
  };

  
  return (
    <div className="calc-container">
      <div className="screen">
        {showGif && <p style={{fontSize:'50px'}}>🙈🙉🙊</p>}
        {/* {showGif && <img className="gif" src={gif} alt="gif" />} */}
        
      </div>
      <div>
      {secondaryScreen && (
          <input
            type="text"
            value={secondaryScreen}
            disabled
            className="secondScreen"
          />
        )}
        <input
          type="text"
          value={screenValue}
          disabled
          placeholder="0"
          className="screen-result"
        />
      </div>
          
        <div className="calculator">
          <div>
            <button className="orange" onClick={clean}>
              C
            </button>
            <button className="mathSigns" onClick={() => handleButtonClick("(")}> ( </button>
            <button className="mathSigns" onClick={() => handleButtonClick(")")}> ) </button>
            <button className="operations" onClick={() => handleButtonClick("*")}> * </button>
          </div>
          <div>
            <button className="mathSigns orange" onClick={sqrt}>√</button>
            <button className="mathSigns" onClick={percent}>%</button>
            <button className="mathSigns" onClick={plusMinus}>±</button>
            <button className="operations" onClick={() => handleButtonClick("/")}> / </button>
          </div>
          <div>
            {[7, 8, 9].map((num) => (
              <button
                key={num}
                className="numbers"
                onClick={() => handleButtonClick(num.toString())}
              >
                {num}
              </button>
            ))}
            <button className="operations" onClick={() => handleButtonClick("-")}> - </button>
          </div>
          <div>
            {[4, 5, 6].map((num) => (
              <button
                key={num}
                className="numbers"
                onClick={() => handleButtonClick(num.toString())}
              >
                {num}
              </button>
            ))}
            <button className="operations" onClick={() => handleButtonClick("+")}> + </button>
          </div>
          <div>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className="numbers"
                onClick={() => handleButtonClick(num.toString())}
              >
                {num}
              </button>
            ))}
            <button className="numbers" onClick={() => handleButtonClick("0")}>0</button>
            <div>     
            <button className="numbers" onClick={() => handleButtonClick(".")}>.</button>            
            <button id="erase" className="numbers" onClick={retro}>⌂</button>
            <button className="purple" onClick={calculate}>=</button>
            </div>   
            </div>
         
        </div>
     
    </div>
  );
};

export default Calculator;
