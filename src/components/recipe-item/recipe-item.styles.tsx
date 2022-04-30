import { Link } from "react-router-dom";
import styled from "styled-components";

export const RecipeItemContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid rgb(245, 245, 245);
  border-radius: 5px;
  padding: 5px 10px;
  height: 42px;
  margin: 0 0 2px;
  gap: 16px;
  font-size: larger;

  &:hover {
    cursor: pointer;
    background-color: rgb(245, 245, 245);
  }
`;

export const RecipeTitle = styled.div`
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RecipeTime = styled.span`
  width: 20%;
`;

export const RecipeTagsContainer = styled.div`
  width: 30%;
  height: 32px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: right;
`;

export const RecipeTag = styled.div`
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
