import React, {useState} from 'react';
import "./App.css";
import Input from "./components/input";
import DropDown from "./components/dropdown";
import Table from "./components/table";
import DataContext from './context/Context';

function App() {
  const [selectedValue, setSelectedValue] = useState("Truss"); // Set initial value to 'Truss'
  // console.log(selectedValue)
  const updateValue = (newValue) => {
    setSelectedValue(newValue);
  };
  return (

   <DataContext.Provider value={{ selectedValue, updateValue }}>
    <div className="app">
      <div className="app-left-wrapper">
        <div className="app-dropdown-wrapper">
        <DropDown />
        </div>
       <div className="app-dreo"> <Input /></div>
       
      </div>
      <div className="app-table-wrapper">
        <Table/>
      </div>
    </div>
   </DataContext.Provider>

 
  );
}

export default App;
