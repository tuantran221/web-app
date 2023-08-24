import React, { useState } from "react";
import down from "../../assets/icons8-down.png";
import up from "../../assets/icons8-up.png";
import "./style.css";
const Input = () => {
  var initValue = 0;
  const [sliderValue, setSliderValue] = useState(initValue);
  console.log("slidervalue", sliderValue);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
  const handleInputChange = (e) => {
    let newValue = e.target.value;
    // if (newValue >= -49 && newValue <= 49) {
    //   setSliderValue(newValue);
    // }
    setSliderValue(newValue);
  };

  const handleOptionChange = (val) => {
    setSliderValue(val);
  };

  const IncrementValue = () => {
    if (sliderValue < 49) {
      setSliderValue((prevValue) => parseInt(prevValue) + 1);
    }
  };

  const DecrementValue = () => {
    if (sliderValue > -49) {
      setSliderValue((prevValue) => parseInt(prevValue) - 1);
    }
  };

  return (
    <div className="input">
      <div className="slider-container">
        {/* <label className="slider-value">-49</label> */}
        <input
          type="range"
          className="slider"
          list="values"
          value={sliderValue}
          onChange={(e) => handleSliderChange(e.target.value)}
          min="-49"
          max="49"
        />
        <datalist id="values">
          <option
            value="-49"
            label="-49"
            onClick={() => handleOptionChange(-49)}
          ></option>
          <option
            value="0"
            label="0"
            onClick={() => handleOptionChange(0)}
          ></option>
          <option
            value="49"
            label="49"
            onClick={() => handleOptionChange(49)}
          ></option>
        </datalist>
        {/* <label className="slider-value">49</label> */}
      </div>

      <div className="input-wrapper">
        <div className="input-wrapper-text">
          <input value={sliderValue} onInput={handleInputChange} />
          <div className="input-wrapper-btn">
            <button onClick={IncrementValue} className="input-btn">
              <img src={up} alt="up" className="icon-btn" />
            </button>
            <button onClick={DecrementValue} className="input-btn">
              <img src={down} alt="down" className="icon-btn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
