import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState({});
  const [activeButton, setActiveButton] = useState("instructions");

  let params = useParams();

  const getPopularAPIData = async () => {
    // Checking local storage in the browser
    const checkLocalStorage = localStorage.getItem("recipe");

    // checking if there is any items in the local storage which is in the browser so we don't have to fetch the API
    // In the localStorage we can only store string that's why we used .parse
    if (checkLocalStorage) {
      // setRecipeData(JSON.parse(checkLocalStorage));
    } else {
      try {
        const apiRes = await fetch(
          `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await apiRes.json();

        // Converting data JS object to JSON
        // localStorage.setItem("recipe", JSON.stringify(data.recipes));
        setRecipeData(data.recipes);
        console.log(data.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log("Recipedata" + recipeData);

  useEffect(() => {
    getPopularAPIData();
  }, []);

  return (
    <Wrapper>
      <div>
        <h3>title</h3>
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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

        {activeButton === "instructions" && (
          <div>
            <p></p>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              animi ullam voluptas et ex enim ab qui, corrupti dolorum
              explicabo!
            </p> */}
          </div>
        )}
        {activeButton === "ingredients" && (
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </ul>
        )}

        {/* {recipeData.map((item) => (
          <p>{item.imageType}</p>
        ))} */}
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
