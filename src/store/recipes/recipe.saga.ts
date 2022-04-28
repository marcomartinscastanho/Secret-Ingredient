import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { getRecipes } from "../../utils/firebase/firebase.utils";
import { fetchRecipesFailed, fetchRecipesSuccess } from "./recipe.action";
import { RECIPES_ACTION_TYPES } from "./recipe.types";

export function* fetchRecipesAsync() {
  try {
    const recipesArray = yield* call(getRecipes);
    yield put(fetchRecipesSuccess(recipesArray));
  } catch (error) {
    yield put(fetchRecipesFailed(error as Error));
  }
}

export function* onFetchRecipes() {
  yield* takeLatest(RECIPES_ACTION_TYPES.FETCH_RECIPES_START, fetchRecipesAsync);
}

export function* recipesSaga() {
  yield* all([call(onFetchRecipes)]);
}
