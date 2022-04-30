import { Link } from "react-router-dom";
import styled from "styled-components";

const subColor = "grey";

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const RecipeTitle = styled.div`
  font-size: 42px;
  text-align: center;
  margin-bottom: 16px;
`;

export const RecipeDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin-bottom: 25px;
`;

export const RecipeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 48px;
`;

export const RecipeDescription = styled.div`
  width: 75%;
  text-align: center;
`;

export const RecipeBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 72px;
`;

export const RecipeIngredientsContainer = styled.div`
  width: 40%;
`;

export const RecipePrepStepsContainer = styled.div`
  width: 60%;
`;

export const RecipeSectionTitle = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const RecipeIngredientsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipePrepStepsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const RecipeIngredientContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;

  padding: 1px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid lightgray;
  margin-bottom: 8px;
`;

export const RecipePrepStepContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 16px;
  margin-bottom: 16px;
`;

export const RecipePrepStepIndex = styled.span`
  font-size: 24px;
`;

export const RecipeTagsContainer = styled.div`
  height: 32px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: right;
`;

export const RecipeTag = styled(Link)`
  height: 32px;
  display: flex;
  align-items: center;
  color: white;
  background-color: rgb(80, 80, 80);
  margin: 0 3px 0 0;
  padding: 2px 8px;
  border-radius: 8px;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;
