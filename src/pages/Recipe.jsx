import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState({});
  const [activeButton, setActiveButton] = useState("instructions");

  let params = useParams();

  const checkLocalStorage = localStorage.getItem("recipe");

  const getRecipesData = async () => {
    // if (checkLocalStorage) {
    //   setRecipeData(JSON.parse(checkLocalStorage));
    // } else {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const resData = await response.json();
      console.log(resData);

      // localStorage.setItem("recipe", JSON.stringify(resData));
      setRecipeData(resData);
    } catch (error) {
      console.log(error);
    }
    // }
  };

  console.log(recipeData);

  useEffect(() => {
    getRecipesData();
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
          // If the activeButton is set to instruction is true then apply "active style"
          className={activeButton === "instructions" && "active"}
          onClick={() => setActiveButton("instructions")}
        >
          Instructions
        </Button>
        <Button
          // If the activeButton is set to ingredients is true then apply "active style"
          className={activeButton === "ingredients" && "active"}
          onClick={() => setActiveButton("ingredients")}
        >
          Ingredients
        </Button>

        <div>
          <h3 dangerouslySetInnerHTML={{ __html: recipeData.summary }}></h3>
          <h3
            dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
          ></h3>
        </div>

        <ul>
          {recipeData.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        {/* {activeButton === "instructions" && (
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              animi ullam voluptas et ex enim ab qui, corrupti dolorum
              explicabo!
            </p>
          </div>
        )}
        {activeButton === "ingredients" && (
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </ul>
        )} */}
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

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  p {
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  ul {
    margin-top: 2rem;
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
