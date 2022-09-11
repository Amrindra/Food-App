import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const [searchResultData, setSearchResultData] = useState([]);
  // Using useParams here is to get parms url dynamically
  const params = useParams();

  // The urlQuery parameter here is used to get the parmas from the url
  const getCuisineData = async (urlQuery) => {
    try {
      const resData = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${urlQuery}`
      );
      // const recipes = await resData.json();
      setSearchResultData(resData.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCuisineData(params.type);
  }, [params.type]);
  return <div>SearchResult</div>;
};

export default SearchResult;
