import React from 'react';
import "./App.css";
import Input from "./components/sliderbar";
import DropDown from "./components/dropdown";
import Table from "./components/table";

import { SelectProvider } from './context/Context';

function App() {

  return (

   <SelectProvider>
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
   </SelectProvider>

 
  );
}

export default App;
