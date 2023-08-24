import React, { useState, useContext } from "react";
import "./style.css";
import SelectContext from "../../context/Context";
// import data from "../../data/fake_data.json";
const Input = () => {
  var initValue = 0;

  const [sliderValue, setSliderValue] = useState(initValue);

  // console.log("slider", sliderValue);
  const selected = useContext(SelectContext);
  // console.log("selected", selected);

  // ------------- function handle action input bar --------------------
  const handleSliderChange = (val) => {
    setSliderValue(val);
    selected.setBarSelect(parseInt(val));
    selected.setdropDisable(true);
  };

  const handleInputChange = (e) => {
    let val = e.target.value;
    setSliderValue(val);
    selected.setBarSelect(parseInt(val));
  };

  const handleOptionChange = (val) => {
    setSliderValue(val);
    selected.setBarSelect(val);
  };

  // --------------------------------------

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
          min={parseInt("-49")}
          max={parseInt("49")}
        />
        <datalist id="values">
          <option
            className={
              selected.isdisable ? "datalist-option-disable" : "datalist-option"
            }
            disabled={selected.isdisable}
            value={-49}
            label="-49"
            onClick={() => handleOptionChange(-49)}
          ></option>
          <option
            className={
              selected.isdisable ? "datalist-option-disable" : "datalist-option"
            }
            disabled={selected.isdisable}
            value={0}
            label="0"
            onClick={() => handleOptionChange(0)}
          ></option>
          <option
            className={
              selected.isdisable ? "datalist-option-disable" : "datalist-option"
            }
            disabled={selected.isdisable}
            value={49}
            label="49"
            onClick={() => handleOptionChange(49)}
          ></option>
        </datalist>
        <div
          className={
            sliderValue > 49
              ? "input-validation-true"
              : "input-validation" && sliderValue < -49
              ? "input-validation-true"
              : "input-validation"
          }
        >
          <p>Please enter a value between -49 and 49</p>
        </div>
      </div>

      <div className="input-wrapper">
        <input
          type="number"
          min={parseInt("-49")}
          max={parseInt("49")}
          value={sliderValue}
          onInput={handleInputChange}
          disabled={selected.isdisable}
          className={selected.isdisable ? "input-field-disable" : "input-field"}
        />
      </div>
    </div>
  );
};

export default Input;
