import React from "react";
import Nav from "./components/nav/Nav";
import WomensCard from "./components/prodCard/womensCard/WomensCard";

const WomensCat = ({ fCat, openModal, showModal, setShowModal }) => {
  return (
    <div>
      <Nav />
      <WomensCard
        fCat={fCat}
        openModal={openModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default WomensCat;
