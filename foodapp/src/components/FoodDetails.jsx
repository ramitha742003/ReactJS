import { useState, useEffect } from "react";
import styles from "./foodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a78cbec7b1be4071aae5145cea8f49b3";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>{food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " Vegetarian" : " Non-vegetarian"}
            </strong>
          </span>
          <span>{food.vegan ? " Vegan" : " "}</span>
        </div>
        <div>
          $<span>{food.pricePerServing / 100} per servings</span>
        </div>
      </div>

      <div>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
