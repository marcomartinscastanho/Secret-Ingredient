import { FC } from "react";
import { Ingredient } from "../../store/ingredients/ingredient.types";
import { IngredientContainer, IngredientTitle } from "./ingredient-item.styles";

export type IngredientItemProps = {
  ingredient: Ingredient;
};

export const IngredientItem: FC<IngredientItemProps> = ({ ingredient }) => {
  const { name } = ingredient;

  return (
    <IngredientContainer>
      <IngredientTitle>{name}</IngredientTitle>
    </IngredientContainer>
  );
};

export default IngredientItem;
