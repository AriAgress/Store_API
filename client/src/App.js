import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./pages/Home";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:8000/api");
      setItems(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Home items={items} />
    </div>
  );
}

export default App;
