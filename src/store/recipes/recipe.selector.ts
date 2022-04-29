import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { RootState } from "../store";
import { selectCurrentUser } from "../user/user.selector";
import { RecipesState } from "./recipe.reducer";
import { RecipeMap } from "./recipe.types";

const selectRecipeReducer = (state: RootState): RecipesState => state.recipes;

export const selectRecipes = createSelector(
  [selectRecipeReducer],
  (recipesSlice) => recipesSlice.recipes
);

export const selectIsRecipesMenuOpen = createSelector(
  [selectRecipeReducer],
  (recipesSlice) => recipesSlice.isRecipesMenuOpen
);

export const selectRecipesIsLoading = createSelector(
  [selectRecipeReducer],
  (recipesSlice) => recipesSlice.isLoading
);

export const selectPublicRecipes = createSelector([selectRecipes], (recipes) =>
  recipes.filter((recipe) => recipe.isPublic)
);

export const selectOwnRecipes = createSelector([selectRecipes, selectCurrentUser], (recipes) => {
  const currentUser = useSelector(selectCurrentUser);
  return recipes.filter((recipe) => currentUser && recipe.owner.email === currentUser.email);
});

export const selectVisibleRecipes = createSelector(
  [selectRecipes, selectCurrentUser],
  (recipes) => {
    const currentUser = useSelector(selectCurrentUser);
    return recipes.filter(
      (recipe) => recipe.isPublic || (currentUser && recipe.owner.email === currentUser.email)
    );
  }
);

export const selectIngredientsRecipeMap = createSelector(
  [selectVisibleRecipes],
  (recipes): RecipeMap =>
    recipes.reduce((acc, recipe) => {
      const { ingredients } = recipe;
      ingredients.forEach((ingredient) => {
        const id = ingredient.ingredient.id;
        const ingredientRecipes = acc[id] || (acc[id] = []);
        if (ingredientRecipes.filter((ingRec) => ingRec.id === recipe.id).length === 0) {
          acc[id].push(recipe);
        }
      });

      return acc;
    }, {} as RecipeMap)
);
