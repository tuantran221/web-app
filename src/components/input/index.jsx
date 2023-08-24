import React, { useState, useContext } from "react";
import down from "../../assets/icons8-down.png";
import up from "../../assets/icons8-up.png";
import "./style.css";
import SelectContext from "../../context/Context";
const Input = () => {
  var initValue = 0;

  const [sliderValue, setSliderValue] = useState(initValue);
  // console.log("slider", sliderValue)
  const selected = useContext(SelectContext);
  console.log("selected", selected);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
  const handleInputChange = (e) => {
    let newValue = e.target.value;
    setSliderValue(newValue);
  };

  const handleOptionChange = (val) => {
    setSliderValue(val);
    selected.setBarSelect(val);
    console.log(val);
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
        <input
          type="range"
          className={selected.isdisable ? "slider-disable" : "slider"}
          disabled={selected.isdisable}
          list="values"
          value={sliderValue}
          onChange={(e) => handleSliderChange(e.target.value)}
          min="-49"
          max="49"
        />
        <datalist id="values">
          <option
            className={selected.isdisable? "datalist-option-disable" : "datalist-option"}
            disabled={selected.isdisable}
            value="-49"
            label="-49"
            onClick={() => handleOptionChange("-49")}
          ></option>
          <option
            className={selected.isdisable? "datalist-option-disable" : "datalist-option"}
            disabled={selected.isdisable}
            value="0"
            label="0"
            onClick={() => handleOptionChange("0")}
          ></option>
          <option
            className={selected.isdisable? "datalist-option-disable" : "datalist-option"}
            disabled={selected.isdisable}
            value="49"
            label="49"
            onClick={() => handleOptionChange("49")}
          ></option>
        </datalist>
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
