import { createContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [dropdownValue, setDropdownValue] = useState("Truss");
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderDisable, setSliderDisable] = useState(false);
  const [dropDisable, setDropDisable] = useState(false);

  // const memoValue = useMemo(() => ({
  //   dropdownValue,
  //   sliderValue,
  //   sliderDisable,
  //   dropDisable,
  //   setSliderValue,
  //   setDropdownValue,
  //   setDropDisable,
  //   setSliderDisable,
  // }),[dropDisable, dropdownValue, sliderDisable, sliderValue]);
  return <StateContext.Provider value={{ dropdownValue,
    sliderValue,
    sliderDisable,
    dropDisable,
    setSliderValue,
    setDropdownValue,
    setDropDisable,
    setSliderDisable,}}>{children}</StateContext.Provider>;
};

export default StateContext;
