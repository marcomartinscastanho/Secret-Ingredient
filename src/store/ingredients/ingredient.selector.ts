import { createSelector } from "reselect";
import { RootState } from "../store";
import { IngredientsState } from "./ingredient.reducer";
import { IngredientMap } from "./ingredient.types";

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
