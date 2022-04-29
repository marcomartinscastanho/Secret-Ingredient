import { useSelector } from "react-redux";
import { RecipesList } from "../../components/recipes-list/recipes-list.component";
import { selectOwnRecipes } from "../../store/recipes/recipe.selector";

export const MyRecipes = () => {
  const recipes = useSelector(selectOwnRecipes);

  return <RecipesList title="As Minhas Receitas" recipes={recipes} />;
};

export default MyRecipes;
