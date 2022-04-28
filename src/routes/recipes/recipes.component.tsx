import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchRecipesStart } from "../../store/recipes/recipe.action";
import { RecipesList } from "../../components/recipes-list/recipes-list.component";
import { Recipe } from "../../store/recipes/recipe.types";

export const Recipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<RecipesList />} />
      <Route path="my-recipes" element={<RecipesList />} /> {/** TODO: needs a prop */}
    </Routes>
  );
};

export default Recipes;
