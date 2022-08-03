import React from "react";
import WomensCard from "./components/prodCard/womensCard/WomensCard";

const WomensCat = ({ fCat }) => {
  return (
    <React.Fragment>
      <WomensCard fCat={fCat} />
    </React.Fragment>
  );
};

export default WomensCat;
