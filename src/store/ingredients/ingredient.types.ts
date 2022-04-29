export enum INGREDIENTS_ACTION_TYPES {
  FETCH_INGREDIENTS_START = "ingredients/FETCH_INGREDIENTS_START",
  FETCH_INGREDIENTS_SUCCESS = "ingredients/FETCH_INGREDIENTS_SUCCESS",
  FETCH_INGREDIENTS_FAILED = "ingredients/FETCH_INGREDIENTS_FAILED",
}

export type Ingredient = {
  id: string;
  name: string;
};

export type IngredientMap = {
  [key: string]: Ingredient;
};
