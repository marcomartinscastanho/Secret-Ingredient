import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchRecipesStart } from "../../store/recipes/recipe.action";
import { AllRecipes } from "../all-recipes/all-recipes.component";
import { MyRecipes } from "../my-recipes/my-recipes.component";
import { IngredientRecipes } from "../ingredient-recipes/ingredient-recipes.component";
import { TagRecipes } from "../tag-recipes/tag-recipes.component";

export const Recipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<AllRecipes />} />
      <Route path="my-recipes" element={<MyRecipes />} />
      <Route path="/i/:ingredient" element={<IngredientRecipes />} />
      <Route path="/t/:tag" element={<TagRecipes />} />
    </Routes>
  );
};

export default Recipes;
