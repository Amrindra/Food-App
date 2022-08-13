import { useEffect, useState } from "react";
import styled from "styled-components";

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
      {popularData.map((recipe) => (
        <Wrapper>
          <h3>Popular Picks</h3>
          {popularData.map((recipe) => (
            <Card></Card>
          ))}
        </Wrapper>
      ))}
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
`;

export default Popular;
