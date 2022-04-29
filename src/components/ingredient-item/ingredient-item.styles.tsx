import { Link } from "react-router-dom";
import styled from "styled-components";

export const IngredientItemContainer = styled(Link)`
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

export const IngredientItemTitle = styled.div`
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
