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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="mens" element={<MensCat mCat={mCat} />} />
        <Route path="womens" element={<WomensCat fCat={fCat} />} />
        <Route path="jewelery" element={<JewelCat jCat={jCat} />} />
        <Route path="electronics" element={<EleCat eCat={eCat} />} />
      </Routes>
    </div>
  );
}

export default App;
