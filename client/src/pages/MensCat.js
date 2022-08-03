import React from "react";
import Nav from "./components/nav/Nav";
import MensCard from "./components/prodCard/mensCard/MensCard";

const MensCat = ({ mCat, openModal, showModal, setShowModal }) => {
  return (
    <div>
      <Nav />
      <MensCard
        mCat={mCat}
        openModal={openModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default MensCat;
