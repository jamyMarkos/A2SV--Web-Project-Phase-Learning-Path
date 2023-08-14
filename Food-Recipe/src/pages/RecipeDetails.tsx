import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Interface for the structure of a recipe detail
interface RecipeDetail {
  id: number;
  title: string;
  date: string;
  description: string;
  ingredients: string[];
}

const RecipeDetails = () => {
  // State to hold the recipe detail data
  const [recipeDetail, setRecipeDetail] = useState<RecipeDetail | null>(null);
  // Extracting the "id" parameter from the URL using useParams
  const { id } = useParams();

  // Effect hook to fetch data for the specified recipe
  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        // Sending a GET request to fetch recipe details
        const res = await axios.get(`http://localhost:5000/recipes/${id}`);
        setRecipeDetail(res.data); // Updating the state with fetched data
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(Number(id)); // Calling the fetchData function
  }, []); // Dependency array is empty, so the effect runs once after the initial render

  // Display a loading message if the recipe detail is not yet available
  if (!recipeDetail) {
    return (
      <div className="text-center text-3xl font-bold my-16">Loading....</div>
    );
  }

  // Render the recipe details
  return (
    <div>
      <section className="container mx-auto">
        <div>
          {/* Displaying the recipe title */}
          <h3 className="text-center my-8 text-2xl font-bold">
            {recipeDetail.title}
          </h3>
          <hr />
          {/* Dividing the layout into two columns */}
          <div className="flex justify-between items-stretch mt-4 p-6">
            {/* Column for displaying ingredients */}
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-xl mb-4">Ingredients:</h3>
              <div>
                {/* Rendering a list of ingredients */}
                {recipeDetail.ingredients &&
                recipeDetail.ingredients.length > 0 ? (
                  <ul>
                    {recipeDetail.ingredients.map((el, index) => (
                      <li key={index} className="list-disc">
                        {el}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No Ingredients Available.</p>
                )}
              </div>
            </div>
            {/* Vertical divider */}
            <div className="w-[1px] bg-[#ccc] mx-0 my-0"></div>
            {/* Column for displaying image, description, and date */}
            <div className="w-2/3">
              {/* Displaying the recipe image */}
              <img
                src={`/item${id}.jpg`}
                alt=""
                className="w-full h-[250px] rounded-lg mb-8 object-cover"
              />
              {/* Displaying the recipe description */}
              <h3 className="font-bold text-xl mb-2">Direction:</h3>
              <p>{recipeDetail.description}</p>
              {/* Displaying the recipe date */}
              <p className="mt-8">{recipeDetail.date}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetails;
