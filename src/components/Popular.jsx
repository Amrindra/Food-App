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
        {popularData.map((item) => (
          <SplideSlide key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <Card>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <CardInfo>
                  <span>$44.00</span>
                  <button>Add to cart</button>
                </CardInfo>
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
    bottom: 10%;
    transform: translate(-50%, 0%);
    color: white;
    width: 90%;
    border-radius: 1rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(243, 239, 241, 0.4);
  }
`;

const CardInfo = styled.div`
  position: absolute;
`;

const Gradient = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
`;

export default Popular;
