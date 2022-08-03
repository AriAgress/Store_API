import React from "react";
import Nav from "./components/nav/Nav";
import JeweleryCard from "./components/prodCard/jeweleryCard/JeweleryCard";

const JewelCat = ({ jCat, openModal, showModal, setShowModal }) => {
  return (
    <div>
      <Nav />
      <JeweleryCard
        jCat={jCat}
        openModal={openModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default JewelCat;
