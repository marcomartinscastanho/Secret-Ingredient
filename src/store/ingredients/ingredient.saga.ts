import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { getIngredients } from "../../utils/firebase/firebase.utils";
import { fetchIngredientsFailed, fetchIngredientsSuccess } from "./ingredient.action";
import { INGREDIENTS_ACTION_TYPES } from "./ingredient.types";

export function* fetchIngredientsAsync() {
  try {
    const ingredientsArray = yield* call(getIngredients);
    yield put(fetchIngredientsSuccess(ingredientsArray));
  } catch (error) {
    yield put(fetchIngredientsFailed(error as Error));
  }
}

export function* onFetchIngredients() {
  yield* takeLatest(INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_START, fetchIngredientsAsync);
}

export function* ingredientsSaga() {
  yield* all([call(onFetchIngredients)]);
}
