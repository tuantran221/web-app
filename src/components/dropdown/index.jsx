import React, { useState,useContext } from "react";
import "./style.css";
import data from "../../data/fake_data.json";
import DataContext from "../../context/Context";

const DropDown = () => {

  const [option, setOption] = useState();
  console.log(option)

  const { updateValue } = useContext(DataContext); 


  const handleValueOption = (e) => {
    setOption(e.target.value);
    setOption(updateValue)
  };

  return (
    <div className="dropdown-wrapper">
      <select onChange={handleValueOption} className="select-wrapper">
        {data.TypeProduct.map((item, index) => (
          <option key={index} value={item.type}>
            {item.type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
