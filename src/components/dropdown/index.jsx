import React, { useContext } from "react";
import "./style.css";
import data from "../../data/fake_data.json";
import SelectContext from "../../context/Context";

const DropDown = () => {
  const selected = useContext(SelectContext);

  const handleUpdateSelected = (e) => {
    selected.setSelectedValue(e.target.value);
  };

  return (
    <div className="dropdown-wrapper">
      <select onChange={handleUpdateSelected} className="select-wrapper">
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
