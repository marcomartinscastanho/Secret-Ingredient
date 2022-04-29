import { AnyAction } from "redux";
import {
  fetchIngredientsFailed,
  fetchIngredientsStart,
  fetchIngredientsSuccess,
} from "./ingredient.action";
import { Ingredient } from "./ingredient.types";

export type IngredientsState = {
  readonly ingredients: Ingredient[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const INGREDIENTS_INITIAL_STATE: IngredientsState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

export const ingredientsReducer = (
  state = INGREDIENTS_INITIAL_STATE,
  action = {} as AnyAction
): IngredientsState => {
  if (fetchIngredientsStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchIngredientsSuccess.match(action)) {
    return { ...state, ingredients: action.payload, isLoading: false };
  }

  if (fetchIngredientsFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
