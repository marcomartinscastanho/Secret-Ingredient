import { Routes, Route } from "react-router-dom";
import { AllRecipes } from "./all-recipes.component";
import { MyRecipes } from "./my-recipes.component";
import { IngredientRecipes } from "./ingredient-recipes.component";
import { TagRecipes } from "./tag-recipes.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRecipesStart } from "../../store/recipes/recipe.action";
import { Ingredients } from "../ingredients/ingredients.component";
import { fetchIngredientsStart } from "../../store/ingredients/ingredient.action";
import { fetchTagsStart } from "../../store/tags/tag.action";

const Tags = () => {
  return <h1>Etiquetas</h1>;
};

export const Recipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesStart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchIngredientsStart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTagsStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<AllRecipes />} />
      <Route path="my-recipes" element={<MyRecipes />} />
      <Route path="i" element={<Ingredients />} />
      <Route path="i/:ingredient" element={<IngredientRecipes />} />
      <Route path="t" element={<Tags />} />
      <Route path="t/:tag" element={<TagRecipes />} />
    </Routes>
  );
};

export default Recipes;
