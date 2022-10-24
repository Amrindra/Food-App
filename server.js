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

app.get("/cuisines/:foodQuery", async (req, res) => {
  // req.params.foodQuery is from the frontend side which is the Cuisine component. When we click on for example: American it will show american food and so on
  try {
    const apiRes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${req.params.foodQuery}`
    );

    res.json(apiRes.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/searchResult/:searchFoodQuery", async (req, res) => {
  // req.params.foodQuery is from the frontend side which is the Cuisine component. When we click on for example: American it will show american food and so on
  try {
    const apiRes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${req.params.searchFoodQuery}`
    );

    res.json(apiRes.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || process.env.Production, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
