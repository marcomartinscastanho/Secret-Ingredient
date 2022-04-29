import { createSelector } from "reselect";
import { RootState } from "../store";
import { IngredientsState } from "./ingredient.reducer";

const selectIngredientReducer = (state: RootState): IngredientsState => state.ingredients;

export const selectIngredients = createSelector(
  [selectIngredientReducer],
  (ingredientsSlice) => ingredientsSlice.ingredients
);

export const selectIngredientsIsLoading = createSelector(
  [selectIngredientReducer],
  (ingredientsSlice) => ingredientsSlice.isLoading
);
