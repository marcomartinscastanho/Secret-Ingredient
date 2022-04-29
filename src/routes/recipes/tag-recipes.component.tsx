import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RecipesList } from "../../components/recipes-list/recipes-list.component";
import { selectTagsRecipeMap } from "../../store/recipes/recipe.selector";
import { selectTagsMap } from "../../store/tags/tag.selector";

type TagRecipesRouteParams = {
  id: string;
};

export const TagRecipes = () => {
  const { id } = useParams<keyof TagRecipesRouteParams>() as TagRecipesRouteParams;
  const tagsRecipeMap = useSelector(selectTagsRecipeMap);
  const tagsMap = useSelector(selectTagsMap);
  const tag = tagsMap[id];
  const recipes = tagsRecipeMap[id];

  return <RecipesList title={`Receitas: ${tag.name}`} recipes={recipes} />;
};

export default TagRecipes;
