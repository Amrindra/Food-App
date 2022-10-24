import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartStateProvider";
import { BeatLoader } from "react-spinners";

const SearchResult = () => {
  const [searchResultData, setSearchResultData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  // Using useParams here is to get parms url dynamically from the url
  const params = useParams();

  // The urlQuery parameter here is used to get the parmas from the url
  const getCuisineData = async (urlQuery) => {
    try {
      // const resData = await axios.get(
      //   `http://localhost:5000/searchResult/${urlQuery}`
      // );

      const resData = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${urlQuery}`
      );
      // const recipes = await resData.json();
      setSearchResultData(resData.data.results);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // params.search is fromthe Pages component where the path is path="/searchResult/:search"
    getCuisineData(params.search);
    // passing params.search in the array dependency so that it will re-redner every time user searches
  }, [params.search]);

  return (
    <CuisineGridStyled>
      {isLoading ? (
        <Loading>
          <BeatLoader color="#313131" />
          <p>Loading data...</p>
        </Loading>
      ) : (
        <>
          {searchResultData.map((item) => {
            item.pricePerServing = 12.0;
            return (
              <Card key={item.id}>
                <Link to={"/singleItem/" + item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                </Link>
                <span>$12.00 Fixed Price</span>
                <button onClick={() => addToCart(item)}>Order Me</button>
              </Card>
            );
          })}
        </>
      )}
    </CuisineGridStyled>
  );
};

const CuisineGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin-top: 3rem;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem;
`;

const Card = styled.div`
  position: relative;
  text-align: center;

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

  button {
    border: none;
    padding: 0.61rem;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 35%;
    text-align: center;
    background-color: rgba(162, 162, 162, 0.4);
    color: white;
    font-weight: bold;
    font-size: 1.3rem;
    opacity: 0;
  }

  span {
    opacity: 0;
  }

  &:hover {
    button {
      opacity: 100;
      cursor: pointer;
      background-color: var(--dark-color);
    }

    span {
      opacity: 100;
    }
  }
`;

export default SearchResult;
