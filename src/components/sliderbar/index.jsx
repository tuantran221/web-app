import React, { useContext } from "react";
import "./style.css";
import StateContext from "../../context/Context";
import data from "../../data/fake_data.json";
const Slider = () => {
  var datalistValue = [-49, 0, 49];
  var ListSlope = [];
  data.ListProduct.map((item) => {
   return  ListSlope.push(item.slope)
  })
// ----------- context state ------------

  const selected = useContext(StateContext);

  // ------------- function handle action input bar --------------------
  const handleSliderChange =  (val) => {
    let value = parseInt(val)
    selected.setSliderValue(value);

    let isDisable = ListSlope.some(item => item === value);
    if(isDisable === true){
      selected.setDropDisable(false)
    }else selected.setDropDisable(true)
    
   
  };

  const handleInputChange = (e) => {
    let val = e.target.value;
    console.log(val)
    selected.setSliderValue(parseInt(val));
  };

  const handleOptionChange = (val) => {
    let value = parseInt(val)
    selected.setSliderValue(value);
   
  };

  // --------------------------------------

  return (
    <div className="slider-wrapper">
    
      <div className="slider-container">
    
      <input
          type="range"
          id="slider"
          className={selected.sliderDisable ? "slider-disable" : "slider"}
          disabled={selected.sliderDisable}
          list="values"
          value={selected.sliderValue}
          onChange={(e) => handleSliderChange(e.target.value)}
          min={parseInt("-49")}
          max={parseInt("49")}
        />
       
        <datalist id="values">
          {datalistValue.map((item, index) => (
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
        
        <div
          className={
            selected.sliderValue > 49 || selected.sliderValue < -49
              ? "notvalidation"
              : "validation"
          }
        >
          <p>Please enter a value between -49 and 49</p>
        </div>
        <div className={isNaN(selected.sliderValue) ? "notvalidation" :  "validation" }><p>Slope Angle is a required field.</p></div>
      </div>

      <div className="input-wrapper">
        <input
          type="number"
          min={parseInt("-49")}
          max={parseInt("49")}
          value={selected.sliderValue}
          onInput={handleInputChange}
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
