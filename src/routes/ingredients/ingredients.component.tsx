import { Fragment } from "react";
import { useSelector } from "react-redux";
import IngredientItem from "../../components/ingredient-item/ingredient-item.component";
import { Spinner } from "../../components/spinner/spinner.component";
import {
  selectIngredientsIsLoading,
  selectIngredientsSortedByRecipes,
} from "../../store/ingredients/ingredient.selector";
import { IngredientsContainer, Title } from "./ingredients.styles";

export const Ingredients = () => {
  const isLoading = useSelector(selectIngredientsIsLoading);
  const ingredients = useSelector(selectIngredientsSortedByRecipes);

  return (
    <Fragment>
      <Title>Ingredientes</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <IngredientsContainer>
          {ingredients.map((ingredient) => (
            <IngredientItem ingredient={ingredient} key={ingredient.id} />
          ))}
        </IngredientsContainer>
      )}
    </Fragment>
  );
};

export default Ingredients;
