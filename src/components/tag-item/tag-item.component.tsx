import { FC } from "react";
import { useSelector } from "react-redux";
import { selectTagsRecipeMap } from "../../store/recipes/recipe.selector";
import { Tag } from "../../store/tags/tag.types";
import { TagItemContainer, TagItemTitle } from "./tag-item.styles";

export type TagItemProps = {
  tag: Tag;
};

export const TagItem: FC<TagItemProps> = ({ tag }) => {
  const tagsRecipeMap = useSelector(selectTagsRecipeMap);
  const { name, id } = tag;
  const recipes = tagsRecipeMap[id];

  return (
    <TagItemContainer to={id}>
      <TagItemTitle>{name}</TagItemTitle>
      <div>
        {recipes.length} receita{recipes.length > 1 ? "s" : ""}
      </div>
    </TagItemContainer>
  );
};

export default TagItem;
