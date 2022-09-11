import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Veggetable() {
  const [veggie, setVeggie] = useState([]);

  const getVeggieData = async () => {
    // Checking local storage in the browser
    const checkLocalStorage = localStorage.getItem("veggie");

    // checking if there is any items in the local storage which is in the browser we don't have to fetch the API
    // In the localStorage we can only store string that's why we used .parse
    if (checkLocalStorage) {
      setVeggie(JSON.parse(checkLocalStorage));
    } else {
      const apiRes = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await apiRes.json();

      // Converting data JS object to JSON
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getVeggieData();
  }, []);

  return (
    <Container>
      <h3>Vegetarian Choices</h3>
      {/* Splide is a React library for Images slider */}
      <Splide
        options={{
          perPage: 4,
          gap: "3rem",
          drag: "free",
          pagination: false,
        }}
      >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
}

const Container = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggetable;
