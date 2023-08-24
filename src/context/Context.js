import { createContext, useState } from "react";

const SelectContext = createContext();

export const SelectProvider = ({ children }) => {
  const [dropdownSelect, setDropdownSelect] = useState("Truss");
  const [barSelect, setBarSelect] = useState(0);
  const [isdisable, setIsDisable] = useState(false);
  const [dropDisable, setdropDisable] = useState(false)

  return (
    <SelectContext.Provider
      value={{
        dropdownSelect,
        isdisable,
        barSelect,
        dropDisable,
        setBarSelect,
        setIsDisable,
        setDropdownSelect,
        setdropDisable
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export default SelectContext;
