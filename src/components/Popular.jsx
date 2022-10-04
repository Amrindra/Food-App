import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartStateProvider";

function Popular() {
  const [popularData, setPopularData] = useState([]);

  const { addToCart } = useContext(CartContext);

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
          breakpoints: {
            1024: {
              perPage: 3,
            },
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
          perPage: 3,
          gap: "3rem",
          drag: "free",
          pagination: false,
        }}
      >
        {popularData.map((item) => (
          <SplideSlide key={item.id}>
            <Card>
              <Link to={"/singleItem/" + item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </Link>
              <CardInfo>
                <span>${item.pricePerServing}</span>
                <button onClick={() => addToCart(item)}>Add to cart</button>
              </CardInfo>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
}

const Container = styled.div`
  h3 {
    margin: 3rem 3rem;
  }
`;

const Card = styled.div`
  min-height: 20rem;
  overflow: hidden;
  background-color: rgba(243, 239, 241, 0.9);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    color: #411530;
    width: 90%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    width: 100%;
    padding-top: 1rem;
  }

  @media only screen and (max-width: 580px) {
  }
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 2rem;

  span {
    color: var(--dark-color);
    font-size: 1.4rem;
    font-weight: bold;
  }

  button {
    color: var(--dark-color);
    background: none;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.3rem 1.5rem;
    border-radius: 1rem;
    text-transform: capitalize;

    &:hover {
      background: var(--dark-color);
      color: white;
      cursor: pointer;
    }
  }
`;

export default Popular;
