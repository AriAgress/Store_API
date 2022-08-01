const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", async (req, res) => {
  try {
    const fetchItems = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );

    const data = {
      items: fetchItems.data,
    };

    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => console.log(`listening at http://localhost/${PORT})`));
