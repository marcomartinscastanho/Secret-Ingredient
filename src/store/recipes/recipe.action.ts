import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { Recipe, RECIPES_ACTION_TYPES } from "./recipe.types";

export type SetIsRecipesMenuOpen = ActionWithPayload<
  RECIPES_ACTION_TYPES.SET_IS_RECIPES_MENU_OPEN,
  boolean
>;
export type FetchRecipesStart = Action<RECIPES_ACTION_TYPES.FETCH_RECIPES_START>;
export type FetchRecipesSuccess = ActionWithPayload<
  RECIPES_ACTION_TYPES.FETCH_RECIPES_SUCCESS,
  Recipe[]
>;
export type FetchRecipesFailed = ActionWithPayload<
  RECIPES_ACTION_TYPES.FETCH_RECIPES_FAILED,
  Error
>;

export const setIsRecipesMenuOpen = withMatcher((boolean: boolean) =>
  createAction(RECIPES_ACTION_TYPES.SET_IS_RECIPES_MENU_OPEN, boolean)
);
export const fetchRecipesStart = withMatcher(
  (): FetchRecipesStart => createAction(RECIPES_ACTION_TYPES.FETCH_RECIPES_START)
);
export const fetchRecipesSuccess = withMatcher(
  (recipesArray: Recipe[]): FetchRecipesSuccess =>
    createAction(RECIPES_ACTION_TYPES.FETCH_RECIPES_SUCCESS, recipesArray)
);
export const fetchRecipesFailed = withMatcher(
  (error: Error): FetchRecipesFailed =>
    createAction(RECIPES_ACTION_TYPES.FETCH_RECIPES_FAILED, error)
);
