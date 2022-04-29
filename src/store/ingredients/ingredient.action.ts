import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { Ingredient, INGREDIENTS_ACTION_TYPES } from "./ingredient.types";

export type FetchIngredientsStart = Action<INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_START>;
export type FetchIngredientsSuccess = ActionWithPayload<
  INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_SUCCESS,
  Ingredient[]
>;
export type FetchIngredientsFailed = ActionWithPayload<
  INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_FAILED,
  Error
>;

export const fetchIngredientsStart = withMatcher(
  (): FetchIngredientsStart => createAction(INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_START)
);
export const fetchIngredientsSuccess = withMatcher(
  (categoriesArray: Ingredient[]): FetchIngredientsSuccess =>
    createAction(INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_SUCCESS, categoriesArray)
);
export const fetchIngredientsFailed = withMatcher(
  (error: Error): FetchIngredientsFailed =>
    createAction(INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_FAILED, error)
);
