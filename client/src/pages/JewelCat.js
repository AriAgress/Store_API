import React from "react";
import JeweleryCard from "./components/prodCard/jeweleryCard/JeweleryCard";

const JewelCat = ({ jCat }) => {
  return (
    <React.Fragment>
      <JeweleryCard jCat={jCat} />
    </React.Fragment>
  );
};

export default JewelCat;
