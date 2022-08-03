import React from "react";
import Nav from "./components/nav/Nav";
import HomeCard from "./components/prodCard/homeCard/HomeCard";

const Home = ({ items, openModal, showModal, setShowModal }) => {
  return (
    <div>
      <Nav />
      <HomeCard
        items={items}
        openModal={openModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Home;
