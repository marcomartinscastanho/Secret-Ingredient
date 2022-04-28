import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid rgb(245, 245, 245);
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 0 2px;
  gap: 16px;

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
  height: 26px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: right;
`;

export const RecipeTag = styled.div`
  height: 26px;
  display: block;
  color: white;
  background-color: rgb(80, 80, 80);
  margin: 0 3px 0 0;
  padding: 2px 5px;
  border-radius: 3px;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;