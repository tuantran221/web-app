import React, {useContext} from "react";
import "./style.css";
import data from "../../data/fake_data.json";
import DataContext from "../../context/Context";
const Table = () => {

  const value = useContext(DataContext)


  const Display = data.ListProduct.map((item, index) => {
    if (item.type === value.selectedValue){
      return (
        <tr key={index}>
          <td>{item.model}</td>
          <td>{item.installedCost}</td>
          <td>{item.width}</td>
          <td>{item.height}</td>
          <td>{item.bearing}</td>
        </tr>
      );
    }else return null
  
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Cost</th>
            <th>Width</th>
            <th>Height</th>
            <th>Bearing</th>
          </tr>
        </thead>

        <tbody>{Display}</tbody>
      </table>
    </div>
  );
};

export default Table;

