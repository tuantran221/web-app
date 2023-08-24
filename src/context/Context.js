import { createContext, useState } from "react";

const SelectContext = createContext();

export const SelectProvider = ({children}) =>{
  const [selectedValue, setSelectedValue] = useState("Truss"); 

  return (
    <SelectContext.Provider value={{selectedValue, setSelectedValue}}>
      {children}
    </SelectContext.Provider>
  )
};

export default SelectContext;
