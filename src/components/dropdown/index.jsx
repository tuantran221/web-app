import React, { useContext } from "react";
import "./style.css";
import data from "../../data/fake_data.json";
import StateContext from "../../context/Context";

const DropDown = () => {
  const selected = useContext(StateContext);
  // console.log(selected)


  const handleUpdateSelected = (e) => {
    selected.setDropdownValue(e.target.value);
    selected.setSliderDisable(!(selected.sliderDisable))
  };

  return (
    <div className="dropdown-wrapper">
      <select  onChange={handleUpdateSelected} className="select-wrapper" disabled={selected.dropDisable} >
        {data.TypeProduct.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
