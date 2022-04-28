import { useDispatch } from "react-redux";
import { setIsRecipesMenuOpen } from "../../store/recipes/recipe.action";
import { RecipesDropdownContainer, RecipesMenuItem } from "./recipes-dropdown.styles";

export const RecipesDropdown = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setIsRecipesMenuOpen(false));

  return (
    <RecipesDropdownContainer>
      <RecipesMenuItem as="span" onClick={handleClick}>
        NOVA RECEITA
      </RecipesMenuItem>
      <RecipesMenuItem to="/recipes/my-recipes" onClick={handleClick}>
        MINHAS RECEITAS
      </RecipesMenuItem>
      <RecipesMenuItem to="/recipes" onClick={handleClick}>
        TODAS AS RECEITAS
      </RecipesMenuItem>
    </RecipesDropdownContainer>
  );
};
