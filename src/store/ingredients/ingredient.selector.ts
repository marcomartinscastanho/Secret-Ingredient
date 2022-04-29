import { createSelector } from "reselect";
import { selectIngredientsRecipeMap } from "../recipes/recipe.selector";
import { RootState } from "../store";
import { IngredientsState } from "./ingredient.reducer";
import { Ingredient, IngredientMap } from "./ingredient.types";

const selectIngredientReducer = (state: RootState): IngredientsState => state.ingredients;

export const selectIngredients = createSelector(
  [selectIngredientReducer],
  (ingredientsSlice) => ingredientsSlice.ingredients
);

export const selectIngredientsMap = createSelector(
  [selectIngredients],
  (ingredients): IngredientMap =>
    ingredients.reduce((acc, ingredient) => {
      const { id } = ingredient;
      acc[id] = ingredient;
      return acc;
    }, {} as IngredientMap)
);

export const selectIngredientsIsLoading = createSelector(
  [selectIngredientReducer],
  (ingredientsSlice) => ingredientsSlice.isLoading
);

export const selectIngredientsSortedByRecipes = createSelector(
  [selectIngredients, selectIngredientsRecipeMap],
  (ingredientsSlice, ingredientsRecipeMap) => {
    function compare(a: Ingredient, b: Ingredient) {
      const aRecipes = ingredientsRecipeMap[a.id];
      const bRecipes = ingredientsRecipeMap[b.id];

      if (aRecipes.length > bRecipes.length) {
        return -1;
      }
      if (aRecipes.length < bRecipes.length) {
        return 1;
      }
      return 0;
    }

    const ingredients: Ingredient[] = [...ingredientsSlice];
    return ingredients.sort(compare);
  }
);
