import { FC } from "react";
import { Recipe } from "../../store/recipes/recipe.types";
import { RecipeItem } from "../recipe-item/recipe-item.component";
import { DirectoryContainer } from "./directory.styles";

export type DirectoryProps = {
  recipes: Recipe[];
};

export const Directory: FC<DirectoryProps> = ({ recipes }) => {
  return (
    <DirectoryContainer>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
