import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Cuisine = () => {
  const [cuisineData, setCuisineData] = useState([]);
  // Using useParams here is to get parms url dynamically
  const params = useParams();

  // The urlQuery parameter here is used to get the parmas from the url
  const getCuisineData = async (urlQuery) => {
    try {
      const resData = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${urlQuery}`
      );
      // const recipes = await resData.json();
      setCuisineData(resData.data.results);
      console.log(resData.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCuisineData(params.type);
  }, [params.type]);

  return (
    <CuisineGridStyled>
      {cuisineData.map((item) => (
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </CuisineGridStyled>
  );
};

const CuisineGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin-top: 4rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
  }
`;

export default Cuisine;
