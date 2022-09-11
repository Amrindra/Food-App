import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [popularData, setPopularData] = useState([]);

  const getPopularAPIData = async () => {
    // Checking local storage in the browser
    const checkLocalStorage = localStorage.getItem("popular");

    // checking if there is any items in the local storage which is in the browser so we don't have to fetch the API
    // In the localStorage we can only store string that's why we used .parse
    if (checkLocalStorage) {
      setPopularData(JSON.parse(checkLocalStorage));
    } else {
      try {
        const apiRes = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await apiRes.json();

        // Converting data JS object to JSON
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopularData(data.recipes);
        console.log(data.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getPopularAPIData();
  }, []);

  return (
    <Container>
      <h3>Our Today Selection</h3>
      {/* Splide is a React library for Images slider */}
      <Splide
        options={{
          perPage: 3,
          gap: "3rem",
          drag: "free",
          pagination: false,
        }}
      >
        {popularData.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </Link>
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
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
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

export default Popular;
