const PORT = 5000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi there");
});

app.get("/popular", async (req, res) => {
  try {
    const apiRes = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );

    res.json(apiRes.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/vegetarian", async (req, res) => {
  try {
    const apiRes = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
    );

    res.json(apiRes.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
