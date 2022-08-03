import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import MensCat from "./pages/MensCat";
import WomensCat from "./pages/WomensCat";
import JewelCat from "./pages/JewelCat";
import EleCat from "./pages/EleCat";

function App() {
  const [items, setItems] = useState([]);
  const [mCat, setMCat] = useState([]);
  const [fCat, setFCat] = useState([]);
  const [jCat, setJCat] = useState([]);
  const [eCat, setECat] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:8000/api");
    setItems(data.data);

    let m = [];
    let w = [];
    let j = [];
    let e = [];
    for (let i = 0; i < data.data.length; i++) {
      const element = data.data[i];
      // console.log("OKAY", element);
      if (element.category === "men's clothing") {
        m.push(element);
      } else if (element.category === "women's clothing") {
        w.push(element);
      } else if (element.category === "jewelery") {
        j.push(element);
      } else if (element.category === "electronics") {
        e.push(element);
      }
    }
    setMCat(m);
    setFCat(w);
    setJCat(j);
    setECat(e);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              openModal={openModal}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          }
        />
        <Route
          path="mens"
          element={
            <MensCat
              mCat={mCat}
              openModal={openModal}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          }
        />
        <Route
          path="womens"
          element={
            <WomensCat
              fCat={fCat}
              openModal={openModal}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          }
        />
        <Route
          path="jewelery"
          element={
            <JewelCat
              jCat={jCat}
              openModal={openModal}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          }
        />
        <Route
          path="electronics"
          element={
            <EleCat
              eCat={eCat}
              openModal={openModal}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
