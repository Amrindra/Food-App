import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popularData, setSetPopularData] = useState([]);
  const getPopularAPIData = async () => {
    const apiRes = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await apiRes.json();

    setSetPopularData(data.recipes);
  };

  useEffect(() => {
    getPopularAPIData();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        {/* Splide is a React library for Images slider */}
        <Splide>
          {popularData.map((recipe) => (
            <SplideSlide>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  /* overflow: hidden; */

  img {
    border-radius: 2rem;
  }
`;

export default Popular;
