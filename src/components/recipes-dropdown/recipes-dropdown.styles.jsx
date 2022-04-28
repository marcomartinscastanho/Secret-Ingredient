import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipesDropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  left: 0;
  z-index: 5;
  gap: 16px;
`;

export const RecipesMenuItem = styled(Link)`
  display: flex;
  cursor: pointer;
  flex-direction: column;
`;
