import { all, call } from "typed-redux-saga/macro";
import { ingredientsSaga } from "./ingredients/ingredient.saga";
import { recipesSaga } from "./recipes/recipe.saga";
import { tagsSaga } from "./tags/tag.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield* all([call(ingredientsSaga), call(recipesSaga), call(tagsSaga), call(userSagas)]);
}
