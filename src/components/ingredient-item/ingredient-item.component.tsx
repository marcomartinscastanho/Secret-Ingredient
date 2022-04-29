import { FC } from "react";
import { useSelector } from "react-redux";
import { Ingredient } from "../../store/ingredients/ingredient.types";
import { selectIngredientsRecipeMap } from "../../store/recipes/recipe.selector";
import { IngredientContainer, IngredientTitle } from "./ingredient-item.styles";

export type IngredientItemProps = {
  ingredient: Ingredient;
};

export const IngredientItem: FC<IngredientItemProps> = ({ ingredient }) => {
  const ingredientsRecipeMap = useSelector(selectIngredientsRecipeMap);
  const { name, id } = ingredient;
  const recipes = ingredientsRecipeMap[id];

  return (
    <IngredientContainer>
      <IngredientTitle>{name}</IngredientTitle>
      <div>
        {recipes.length} receita{recipes.length > 1 ? "s" : ""}
      </div>
    </IngredientContainer>
  );
};

export default IngredientItem;
