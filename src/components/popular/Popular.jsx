import { useEffect } from "react";
import "./Popular.css";

function Popular() {
  const getPopularAPIData = async () => {
    const apiRes = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await apiRes.json();

    console.log(data);
  };

  useEffect(() => {
    getPopularAPIData();
  }, []);

  return <div>Popular</div>;
}

export default Popular;
