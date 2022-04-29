import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RecipesList } from "../../components/recipes-list/recipes-list.component";
import { selectIngredientsMap } from "../../store/ingredients/ingredient.selector";
import { selectIngredientsRecipeMap } from "../../store/recipes/recipe.selector";

type IngredientRecipesRouteParams = {
  id: string;
};

export const IngredientRecipes = () => {
  const { id } = useParams<keyof IngredientRecipesRouteParams>() as IngredientRecipesRouteParams;
  const ingredientsRecipeMap = useSelector(selectIngredientsRecipeMap);
  const ingredientsMap = useSelector(selectIngredientsMap);
  const ingredient = ingredientsMap[id];
  const recipes = ingredientsRecipeMap[id];

  return <RecipesList title={`Receitas com ${ingredient.name}`} recipes={recipes} />;
};

export default IngredientRecipes;
