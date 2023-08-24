import React, { useContext } from "react";
import "./style.css";
import data from "../../data/fake_data.json";
import SelectContext from "../../context/Context";

const DropDown = () => {
  const selected = useContext(SelectContext);
  // console.log(selected)


  const handleUpdateSelected = (e) => {
    selected.setDropdownSelect(e.target.value);
    selected.setIsDisable(!(selected.isdisable))
  };

  return (
    <div className="dropdown-wrapper">
      <select onChange={handleUpdateSelected} className="select-wrapper" disabled={selected.dropDisable} >
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
