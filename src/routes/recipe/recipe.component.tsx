import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRecipesMap } from "../../store/recipes/recipe.selector";
import {
  RecipeBodyContainer,
  RecipeContainer,
  RecipeDescription,
  RecipeDescriptionContainer,
  RecipeDetailsContainer,
  RecipeIngredientContainer,
  RecipeIngredientsContainer,
  RecipeIngredientsList,
  RecipePrepStepContainer,
  RecipePrepStepIndex,
  RecipePrepStepsContainer,
  RecipePrepStepsList,
  RecipeSectionTitle,
  RecipeTag,
  RecipeTagsContainer,
  RecipeTitle,
} from "./recipe.styles";

type RecipeRouteParams = {
  id: string;
};

export const Recipe = () => {
  const { id } = useParams<keyof RecipeRouteParams>() as RecipeRouteParams;
  const recipesMap = useSelector(selectRecipesMap);
  const recipe = recipesMap[id];
  const { title, description, prepTime, cookTime, portions, owner, ingredients, prepSteps, tags } =
    recipe;

  return (
    <RecipeContainer>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeDetailsContainer>
        <div className="recipe-prep-time">{prepTime} min</div>
        <div className="recipe-cook-time">{cookTime} min</div>
        <div className="recipe-portions">{portions} pessoas</div>
        <div className="recipe-author">{owner.displayName}</div>
      </RecipeDetailsContainer>
      <RecipeDescriptionContainer>
        <RecipeDescription>{description}</RecipeDescription>
      </RecipeDescriptionContainer>
      <RecipeBodyContainer>
        <RecipeIngredientsContainer>
          <RecipeSectionTitle>Ingredientes</RecipeSectionTitle>
          <RecipeIngredientsList>
            {/** TODO: find some key */}
            {ingredients.map(({ quantity, ingredient, detail }, i) => (
              <RecipeIngredientContainer key={i}>
                <span className="recipe-ingredient-quantity">{quantity}</span>{" "}
                <div className="recipe-ingredient">
                  <span className="recipe-ingredient-name">{ingredient.name}</span>{" "}
                  <span className="recipe-ingredient-detail">{detail}</span>
                </div>
              </RecipeIngredientContainer>
            ))}
          </RecipeIngredientsList>
        </RecipeIngredientsContainer>
        <RecipePrepStepsContainer>
          <RecipeSectionTitle>Preparação</RecipeSectionTitle>
          <RecipePrepStepsList>
            {/** TODO: find some key */}
            {prepSteps.map((step, i) => (
              <RecipePrepStepContainer key={i}>
                <RecipePrepStepIndex>{i + 1}</RecipePrepStepIndex>
                <span className="recipe-prep-step">{step}</span>
              </RecipePrepStepContainer>
            ))}
          </RecipePrepStepsList>
          <RecipeTagsContainer>
            {tags.map((tag) => (
              <RecipeTag to={`/recipes/t/${tag.id}`}>{tag.name}</RecipeTag>
            ))}
          </RecipeTagsContainer>
        </RecipePrepStepsContainer>
      </RecipeBodyContainer>
    </RecipeContainer>
  );
};

export default Recipe;
