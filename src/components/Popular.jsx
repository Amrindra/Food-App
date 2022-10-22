import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartStateProvider";
import { BeatLoader } from "react-spinners";

function Popular() {
  const [popularData, setPopularData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, cartItems } = useContext(CartContext);

  const isAddToCart = cartItems.map((p) => p.id);
  // const popularItem = popularData.filter((prod) => prod.id);
  // console.log("isAdd =>" + isAddToCart);

  // console.log(cartItems);
  // console.log(isAddToCart === popularItem);

  const getPopularAPIData = async () => {
    // Checking local storage in the browser and give popular name
    // const checkLocalStorage = localStorage.getItem("popular");

    // checking if there is any items in the local storage which is in the browser so we don't have to fetch the API
    // In the localStorage we can only store string that's why we used .parse() method
    // if (checkLocalStorage) {
    //   setPopularData(JSON.parse(checkLocalStorage));
    // } else {
    try {
      const apiRes = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await apiRes.json();

      // Converting data JS object to JSON in the localStorage (It's in the browser)
      // localStorage.setItem("popular", JSON.stringify(data.recipes));

      setPopularData(data.recipes);
      // console.log(data.recipes);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    // }
  };

  useEffect(() => {
    getPopularAPIData();
  }, []);

  return (
    <Container>
      <h3>Our Today Selection</h3>
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
                  gap: "1rem",
                },
                880: {
                  perPage: 2,
                  gap: "1rem",
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
            {popularData?.map((item) => (
              <SplideSlide key={item.id}>
                <Card>
                  <Link to={"/singleItem/" + item.id}>
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </Link>
                  <CardInfo>
                    <span>${item.pricePerServing}</span>
                    {isAddToCart === item.id ? (
                      <button onClick={() => addToCart(item)}>
                        Remove from cart
                      </button>
                    ) : (
                      <button onClick={() => addToCart(item)}>
                        Add to cart
                      </button>
                    )}

                    {/* <button onClick={() => addToCart(item)}>Add to cart</button> */}
                  </CardInfo>
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
  h3 {
    margin: 4rem 0 2rem;
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
  overflow: hidden;
  margin: 1.2rem;
  background-color: rgba(243, 239, 241, 0.9);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.55);

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
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  span {
    color: var(--dark-color);
    font-size: 1.4rem;
    font-weight: bold;
  }

  button {
    color: var(--dark-color);
    background: none;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.3rem 1.5rem;
    border-radius: 1rem;
    text-transform: capitalize;
    border: 2px solid black;

    &:hover {
      background: var(--dark-color);
      color: white;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 880px) {
    gap: 0.5rem;

    span {
      font-size: 1rem;
    }

    button {
      font-size: 0.99rem;
      padding: 0.2rem 1rem;
    }
  }
`;

export default Popular;
