import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SingleItem = () => {
  const [singleData, setSingleData] = useState({});

  let params = useParams();

  const getProductData = async () => {
    // Checking local storage in the browser
    const checkLocalStorage = localStorage.getItem("recipe");

    // checking if there is any items in the local storage which is in the browser so we don't have to fetch the API
    // In the localStorage we can only store string that's why we used .parse
    if (checkLocalStorage) {
      setSingleData(JSON.parse(checkLocalStorage));
    } else {
      try {
        const apiRes = await fetch(
          `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await apiRes.json();

        // Converting data JS object to JSON
        localStorage.setItem("recipe", JSON.stringify(data));
        setSingleData(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(singleData);

  useEffect(() => {
    getProductData();
  }, [params.id]);

  return (
    <Wrapper>
      <div>
        <h3>{singleData.title}</h3>
        <img src={singleData.image} alt={singleData.title} />
      </div>
      <Info>
        <Button>Add to Cart</Button>
        <h4>Price: ${singleData.pricePerServing}</h4>
        <Description>Vegan: {singleData.vegan ? "Yes" : "No"}</Description>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 3rem 0 5rem 0;
  display: flex;
  align-items: baseline;

  div {
    img {
      width: 500px;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;

  h4 {
    margin-top: 2rem;
    font-size: 2rem;
  }
`;

const Description = styled.div``;

export default SingleItem;
