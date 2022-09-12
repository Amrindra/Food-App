import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState({});
  const [activeButton, setActiveButton] = useState("instructions");
  const params = useParams();

  const checkLocalStorage = localStorage.getItem("recipe");

  const getData = async () => {
    if (checkLocalStorage) {
      setRecipeData(JSON.parse(checkLocalStorage));
    } else {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const resData = await response.json();

        localStorage.setItem("recipe", JSON.stringify(resData));
        setRecipeData(resData);
        console.log(resData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [params.id]);

  return (
    <Wrapper>
      <div>
        <h3>title</h3>
        <img
          src="https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg"
          alt=""
        />
      </div>
      <Info>
        <Button
          className={activeButton === "instructions" && "active"}
          onClick={() => setActiveButton("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeButton === "ingredients" && "active"}
          onClick={() => setActiveButton("ingredients")}
        >
          Ingredients
        </Button>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10rem 0 5rem 0;
  display: flex;

  div {
    img {
      width: 500px;
    }
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h3 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2px;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
