import { useSelector } from "react-redux";
import { RecipesList } from "../../components/recipes-list/recipes-list.component";
import { selectVisibleRecipes } from "../../store/recipes/recipe.selector";

export const AllRecipes = () => {
  const recipes = useSelector(selectVisibleRecipes);
  return <RecipesList title="Todas as Receitas" recipes={recipes} />;
};

export default AllRecipes;
