import { all, call } from "typed-redux-saga/macro";
import { recipesSaga } from "./recipes/recipe.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield* all([call(recipesSaga), call(userSagas)]);
}
