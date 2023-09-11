import React, { useContext, useState, useRef } from "react";
import "./style.css";
import StateContext from "../../context/Context";

const Slider = () => {

  let dataListValue = [-49, 0, 49];

  let valueRef = useRef('')
  const handleGetTextClick = () => {
    const inputValue = valueRef;
    console.log('input value:', inputValue);
  };


  // ----------- context state -----------------------------------------

  const selected = useContext(StateContext);
  const [tabTimeoutIds, setTabTimeoutIds] = useState([]);

  // ------------- function handle action input bar --------------------

  const handleSliderChange = (value) => {
    // clear previous timeout
    tabTimeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    setTabTimeoutIds([]);

    // set state with delay time
    const timeoutId = setTimeout(() => {
      selected.setSliderValue(parseInt(value));
      console.log("Value", value);
    }, 500);

    // Add new timeout id
    setTabTimeoutIds((prevTabTimeoutIds) => [...prevTabTimeoutIds, timeoutId]);
  };  

  // ---------------- functions handle state ------------------------

  const handleInputChange = (e) => {
    let val = e.target.value;
    selected.setSliderValue(parseInt(val));
  };

  const handleOptionChange = (val) => {
    let value = parseInt(val);
    selected.setSliderValue(value);
  };

  // -----------------------------------------------

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <input
          type="range"
          id="slider"
          className={selected.sliderDisable ? "slider-disable" : "slider"}
          disabled={selected.sliderDisable}
          list="values"
          // value={selected.sliderValue}
          onChange={(e) => handleSliderChange(e.target.value)}
          min={parseInt("-49")}
          max={parseInt("49")}
        />

        <datalist id="values">
          {dataListValue.map((item, index) => (
            <option
              key={index}
              className={
                selected.sliderDisable
                  ? "datalist-option-disable"
                  : "datalist-option"
              }
              disabled={selected.sliderDisable}
              value={item}
              label={item.toString()}
              onClick={() => handleOptionChange(item)}
            ></option>
          ))}
        </datalist>

        <input ref={valueRef}  />
        <button onClick={handleGetTextClick}>Get Input Value</button>
    

        <div
          className={
            selected.sliderValue > 49 || selected.sliderValue < -49
              ? "notvalidation"
              : "validation"
          }
        >
          <p>Please enter a value between -49 and 49</p>
        </div>
        <div
          className={
            isNaN(selected.sliderValue) ? "notvalidation" : "validation"
          }
        >
          <p>Slope Angle is a required field.</p>
        </div>
      </div>

      <div className="input-wrapper">
        <input
          type="number"
          min={parseInt("-49")}
          max={parseInt("49")}
          value={selected.sliderValue}
          onChange={handleInputChange}
          disabled={selected.sliderDisable}
          className={
            selected.sliderDisable ? "input-field-disable" : "input-field"
          }
        />
      </div>
    </div>
  );
};

export default Slider;
