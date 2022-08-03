import React from "react";
import MensCard from "./components/prodCard/mensCard/MensCard";

const MensCat = ({ mCat }) => {
  return (
    <React.Fragment>
      <MensCard mCat={mCat} />
    </React.Fragment>
  );
};

export default MensCat;
