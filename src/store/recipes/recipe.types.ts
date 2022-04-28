import { UserData } from "../../utils/firebase/firebase.utils";
import { Ingredient } from "../ingredients/ingredient.types";
import { Tag } from "../tags/tag.types";

export enum RECIPES_ACTION_TYPES {
  FETCH_RECIPES_START = "recipe/FETCH_RECIPES_START",
  FETCH_RECIPES_SUCCESS = "recipe/FETCH_RECIPES_SUCCESS",
  FETCH_RECIPES_FAILED = "recipe/FETCH_RECIPES_FAILED",
}

export type RecipeIngredient = {
  quantity: string;
  ingredient: Ingredient;
  detail: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  prepTime: number;
  cookTime: number;
  ingredients: RecipeIngredient[];
  prepSteps: string[];
  tags: Tag[];
  owner: UserData & { id: string };
  isPublic: boolean;
};
