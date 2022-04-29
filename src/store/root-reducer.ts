import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients/ingredient.reducer";
import { recipesReducer } from "./recipes/recipe.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
  user: userReducer,
});
