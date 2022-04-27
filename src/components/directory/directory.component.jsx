import { RecipeItem } from "../recipe-item/recipe-item.component";

export const Directory = ({ recipes }) => {
  return (
    <div className="directory-container">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Directory;
