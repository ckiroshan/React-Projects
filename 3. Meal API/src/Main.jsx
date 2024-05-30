import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals))
      .catch((err) => console.log(err));
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div key={idMeal}>
        <section className="card">
          <img src={strMealThumb} alt="Meal thumbnail" />
          <section className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </section>
      </div>
    );
  });
