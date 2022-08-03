import React from "react";
import Nav from "./components/nav/Nav";
import ElectronicsCard from "./components/prodCard/electronicCard/ElectronicsCard";

const EleCat = ({ eCat, openModal, showModal, setShowModal }) => {
  return (
    <div>
      <Nav />
      <ElectronicsCard
        eCat={eCat}
        openModal={openModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default EleCat;
