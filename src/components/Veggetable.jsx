import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartStateProvider";
import { BeatLoader } from "react-spinners";

function Veggetable() {
  const [veggie, setVeggie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  const getVeggieData = async () => {
    // Checking local storage in the browser
    // const checkLocalStorage = localStorage.getItem("veggie");

    // checking if there is any items in the local storage which is in the browser we don't have to fetch the API
    // In the localStorage we can only store string that's why we used .parse
    // if (checkLocalStorage) {
    //   setVeggie(JSON.parse(checkLocalStorage));
    // } else {

    try {
      const apiRes = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await apiRes.json();

      // Converting data JS object to JSON
      // localStorage.setItem("veggie", JSON.stringify(data.recipes));

      setVeggie(data.recipes);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

    // }
  };

  useEffect(() => {
    getVeggieData();
  }, []);

  return (
    <Container>
      <h3>Our Today Vegetarian Choices</h3>

      {/* Giving a condition for loading */}
      {isLoading ? (
        <Loading>
          <BeatLoader color="#313131" />
        </Loading>
      ) : (
        <>
          {/* Splide is a React library for Images slider */}
          <Splide
            options={{
              breakpoints: {
                1024: {
                  perPage: 3,
                },
                880: {
                  perPage: 2,
                },
                640: {
                  perPage: 1,
                },
              },
              perPage: 4,
              gap: "1rem",
              drag: "free",
              pagination: false,
            }}
          >
            {veggie?.map((item) => (
              <SplideSlide key={item.id}>
                <Card>
                  <Link to={"/singleItem/" + item.id}>
                    <ImageWrapper>
                      <img src={item.image} alt={item.title} />
                    </ImageWrapper>
                  </Link>
                  <CardBody>
                    <p>{item.title}</p>
                    <div>
                      <span>${item.pricePerServing}</span>
                      <button onClick={() => addToCart(item)}>
                        Add to cart
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  /* margin-bottom: 4rem; */

  h3 {
    text-transform: capitalize;
    text-align: end;
    margin: 3rem 3rem;
  }

  @media only screen and (max-width: 580px) {
    h3 {
      font-size: 2rem;
      text-align: center;
      width: 300px;
      margin: 2rem;
    }
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  border: 0.3rem solid white;
  margin: 1rem;
  -webkit-box-shadow: 7px 7px 5px -1px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 7px 7px 5px -1px rgba(0, 0, 0, 0.45);
  box-shadow: 7px 7px 5px -1px rgba(0, 0, 0, 0.45);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div``;

const CardBody = styled.div`
  padding-bottom: 2rem;

  p {
    color: #313131;
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 2rem;
    gap: 3rem;

    span {
      font-weight: bold;
    }

    button {
      padding: 0.5rem 1rem;
      color: #313131;
      background: transparent;
      border: 2px solid black;
      border-radius: 5px;
      font-weight: 600;
      font-weight: bold;
      text-transform: capitalize;
      color: black;

      &:hover {
        cursor: pointer;
        background-color: #313131;
        color: white;
        border: 2px solid white;
      }
    }
  }

  @media only screen and (max-width: 880px) {
    div {
      gap: 0.5rem;
    }
  }
`;

export default Veggetable;
