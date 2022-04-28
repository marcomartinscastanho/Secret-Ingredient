import { UserData } from "../../utils/firebase/firebase.utils";
import { Ingredient } from "../ingredients/ingredient.types";
import { Tag } from "../tags/tag.types";

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
