import { AnyAction } from "redux";
import { fetchRecipesFailed, fetchRecipesStart, fetchRecipesSuccess } from "./recipe.action";
import { Recipe } from "./recipe.types";

export type RecipesState = {
  readonly recipes: Recipe[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const RECIPES_INITIAL_STATE: RecipesState = {
  recipes: [],
  isLoading: false,
  error: null,
};

export const recipesReducer = (
  state = RECIPES_INITIAL_STATE,
  action = {} as AnyAction
): RecipesState => {
  if (fetchRecipesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchRecipesSuccess.match(action)) {
    return { ...state, recipes: action.payload, isLoading: false };
  }

  if (fetchRecipesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
