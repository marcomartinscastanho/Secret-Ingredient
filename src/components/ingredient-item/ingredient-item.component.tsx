import { FC } from "react";
import { useSelector } from "react-redux";
import { Ingredient } from "../../store/ingredients/ingredient.types";
import { selectIngredientsRecipeMap } from "../../store/recipes/recipe.selector";
import { IngredientItemContainer, IngredientItemTitle } from "./ingredient-item.styles";

export type IngredientItemProps = {
  ingredient: Ingredient;
};

export const IngredientItem: FC<IngredientItemProps> = ({ ingredient }) => {
  const ingredientsRecipeMap = useSelector(selectIngredientsRecipeMap);
  const { name, id } = ingredient;
  const recipes = ingredientsRecipeMap[id];

  return (
    <IngredientItemContainer to={id}>
      <IngredientItemTitle>{name}</IngredientItemTitle>
      <div>
        {recipes.length} receita{recipes.length > 1 ? "s" : ""}
      </div>
    </IngredientItemContainer>
  );
};

export default IngredientItem;
