import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IngredientItem from "../../components/ingredient-item/ingredient-item.component";
import { Spinner } from "../../components/spinner/spinner.component";
import { fetchIngredientsStart } from "../../store/ingredients/ingredient.action";
import {
  selectIngredientsIsLoading,
  selectIngredientsSortedByRecipes,
} from "../../store/ingredients/ingredient.selector";
import { IngredientsContainer, Title } from "./ingredients.styles";

export const Ingredients = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIngredientsIsLoading);
  const ingredients = useSelector(selectIngredientsSortedByRecipes);

  useEffect(() => {
    dispatch(fetchIngredientsStart());
  }, [dispatch]);

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