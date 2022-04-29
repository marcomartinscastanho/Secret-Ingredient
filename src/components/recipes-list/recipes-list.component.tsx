import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import { selectRecipesIsLoading } from "../../store/recipes/recipe.selector";
import { Recipe } from "../../store/recipes/recipe.types";
import { RecipeItem } from "../recipe-item/recipe-item.component";
import { Spinner } from "../spinner/spinner.component";
import { RecipesContainer, Title } from "./recipes-list.styles";

export type RecipesListProps = {
  title: string;
  recipes: Recipe[];
};

export const RecipesList: FC<RecipesListProps> = ({ title, recipes }) => {
  const isLoading = useSelector(selectRecipesIsLoading);

  return (
    <Fragment>
      <Title>{title}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <RecipesContainer>
          {recipes.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))}
        </RecipesContainer>
      )}
    </Fragment>
  );
};

export default RecipesList;
