import React from "react";
import ElectronicsCard from "./components/prodCard/electronicCard/ElectronicsCard";

const EleCat = ({ eCat }) => {
  return (
    <React.Fragment>
      <ElectronicsCard eCat={eCat} />
    </React.Fragment>
  );
};

export default EleCat;
