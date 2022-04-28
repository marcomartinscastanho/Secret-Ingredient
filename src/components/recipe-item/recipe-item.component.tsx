import { FC } from "react";
import { Recipe } from "../../store/recipes/recipe.types";
import {
  RecipeContainer,
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
    <RecipeContainer>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeTime>{prepTime + cookTime} minutos</RecipeTime>
      <RecipeTagsContainer>
        {tags.map((tag) => (
          <RecipeTag key={tag.id}>{tag.name}</RecipeTag>
        ))}
      </RecipeTagsContainer>
    </RecipeContainer>
  );
};

export default RecipeItem;
