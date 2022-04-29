import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../../components/spinner/spinner.component";
import { TagItem } from "../../components/tag-item/tag-item.component";
import { selectTagsIsLoading, selectTagsSortedByRecipes } from "../../store/tags/tag.selector";
import { TagsContainer, Title } from "./tags.styles";

export const Tags = () => {
  const isLoading = useSelector(selectTagsIsLoading);
  const tags = useSelector(selectTagsSortedByRecipes);

  return (
    <Fragment>
      <Title>Tags</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <TagsContainer>
          {tags.map((tag) => (
            <TagItem tag={tag} key={tag.id} />
          ))}
        </TagsContainer>
      )}
    </Fragment>
  );
};

export default Tags;
