import { combineReducers } from "redux";
import { recipesReducer } from "./recipes/recipe.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
});
