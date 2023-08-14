import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";

interface Recipe {
  id: number;
  title: string;
  description: string;
  date: string;
}

const CardList = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/recipes");
        const data = await res.json();
        setRecipeList(data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center px-3 py-2 font-bold text-2xl mb-3">
        Food Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(recipeList as Recipe[]).map((recipe) => (
          <Link to="/details" key={recipe.id}>
            <CardItem
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              date={recipe.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
