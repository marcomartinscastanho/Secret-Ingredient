import { useParams } from "react-router-dom";
import { RecipesList } from "../../components/recipes-list/recipes-list.component";
import { Recipe } from "../../store/recipes/recipe.types";

type TagRecipesRouteParams = {
  tag: string;
};

export const TagRecipes = () => {
  const { tag } = useParams<keyof TagRecipesRouteParams>() as TagRecipesRouteParams;

  const recipes: Recipe[] = [
    {
      id: "1",
      title: "Pataniscas de bacalhau com arroz de feijão",
      description: "blablabla",
      prepTime: 30,
      cookTime: 40,
      ingredients: [],
      prepSteps: [],
      tags: [
        { id: "1", name: "Peixe" },
        { id: "2", name: "Portuguesa" },
      ],
      isPublic: true,
      owner: {
        id: "1",
        email: "aaaa",
        displayName: "Aadas",
        createdAt: new Date(),
      },
    },
    {
      id: "2",
      title: "Chili com carne",
      description: "blablabla",
      prepTime: 20,
      cookTime: 40,
      ingredients: [],
      prepSteps: [],
      tags: [
        { id: "3", name: "Carne" },
        { id: "4", name: "Mexicana" },
        { id: "5", name: "Exemplo" },
        { id: "6", name: "Etiqueta" },
      ],
      isPublic: true,
      owner: {
        id: "1",
        email: "aaaa",
        displayName: "Aadas",
        createdAt: new Date(),
      },
    },
  ];

  return <RecipesList title={`Receitas de ${tag}`} recipes={recipes} />;
};

export default TagRecipes;
