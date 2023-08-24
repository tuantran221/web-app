import { createContext } from "react";

const DataContext = createContext({
  selectedValue: "Truss",
  updateValue: () => {},
});

export default DataContext;
