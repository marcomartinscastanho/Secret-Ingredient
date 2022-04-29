import { FC } from "react";
import { Recipe } from "../../store/recipes/recipe.types";
import {
  RecipeItemContainer,
  RecipeTag,
  RecipeTagsContainer,
  RecipeTime,
  RecipeTitle,
} from "./recipe-item.styles";

export type RecipeItemProps = {
  recipe: Recipe;
};

export const RecipeItem: FC<RecipeItemProps> = ({ recipe }) => {
  const { title, cookTime, prepTime, tags } = recipe;

  return (
    <RecipeItemContainer to="/">
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeTime>{prepTime + cookTime} minutos</RecipeTime>
      <RecipeTagsContainer>
        {tags.map((tag) => (
          <RecipeTag to={`/recipes/t/${tag.id}`} key={tag.id}>
            {tag.name}
          </RecipeTag>
        ))}
      </RecipeTagsContainer>
    </RecipeItemContainer>
  );
};

export default RecipeItem;
