import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisineData, setCuisineData] = useState([]);
  // Using useParams here is to get parms url dynamically
  const params = useParams();

  // The name parameter here is used to get the parmas from the url
  const getCuisineData = async (name) => {
    try {
      const resData = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );
      // const recipes = await resData.json();
      setCuisineData(resData.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCuisineData(params.type);
    console.log(params.type);
  }, [params.type]);

  return <div>Cuisine</div>;
};

export default Cuisine;
