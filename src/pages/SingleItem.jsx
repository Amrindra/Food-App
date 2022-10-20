import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartStateProvider";

const SingleItem = () => {
  const [singleData, setSingleData] = useState([]);

  const { addToCart } = useContext(CartContext);

  let params = useParams();

  const getProductData = async () => {
    // Checking local storage in the browser
    // const checkLocalStorage = localStorage.getItem("singleItem");

    // checking if there is any items in the local storage which is in the browser so we don't have to fetch the API
    // In the localStorage we can only store string that's why we used .parse
    // if (checkLocalStorage) {
    //   setSingleData(JSON.parse(checkLocalStorage));
    // } else {
    try {
      const apiRes = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await apiRes.json();

      // Converting data JS object to JSON
      // localStorage.setItem("singleItem", JSON.stringify(data));
      setSingleData(data);
    } catch (error) {
      console.log(error);
    }
    // }
  };

  // console.log(singleData);

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <Wrapper>
        <div>
          <h3>{singleData.title}</h3>
          <img src={singleData.image} alt={singleData.title} />
          <Description>Vegan: {singleData.vegan ? "Yes" : "No"}</Description>

          {singleData.cuisines?.length > 0 && (
            <CuisineType>Cuisine Types:</CuisineType>
          )}
          {singleData.cuisines?.map((item, index) => (
            <ul style={{ marginLeft: "1rem" }} key={index}>
              <li> {item}</li>
            </ul>
          ))}
        </div>

        <Info>
          <button onClick={() => addToCart(singleData)}>Add to Cart</button>
          <p>Price: ${singleData.pricePerServing}</p>
        </Info>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    img {
      width: 500px;
    }
    h3 {
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 580px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      img {
        width: 100%;
      }

      h3 {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 1rem;
      }
    }
  }

  @media only screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      width: 100%;

      img {
        width: 100%;
      }

      h3 {
        text-align: center;
        font-size: 2rem;
      }
    }
  }
`;

const Info = styled.div`
  button {
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    font-weight: 600;
    width: 30rem;

    &:hover {
      cursor: pointer;
      background-color: #313131;
      color: white;
    }
  }

  p {
    margin-top: 2rem;
    font-size: 2rem;
  }

  @media only screen and (max-width: 880px) {
    width: 100%;

    p {
      font-size: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      width: 100%;
      margin-top: 1rem;
    }
  }

  @media only screen and (max-width: 580px) {
    align-items: baseline;
    margin-left: 0;

    p {
      font-size: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
    }
  }
`;

const Description = styled.div`
  margin-top: 1rem;
`;

const CuisineType = styled.p`
  font-size: 1rem;
`;

export default SingleItem;
