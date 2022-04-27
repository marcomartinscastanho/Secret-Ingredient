import "./recipe-item.styles.scss";

export const RecipeItem = ({ recipe }) => {
  const { title, time, tags } = recipe;

  return (
    <div className="recipe-container">
      <div>{title}</div>
      <span>{time} minutos</span>
      <div className="recipe-tags-container">
        {tags.map((tag) => (
          <div className="recipe-tag" key={tag.id}>
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeItem;
