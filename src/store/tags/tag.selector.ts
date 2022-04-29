import { createSelector } from "reselect";
import { selectTagsRecipeMap } from "../recipes/recipe.selector";
import { RootState } from "../store";
import { TagsState } from "./tag.reducer";
import { Tag, TagMap } from "./tag.types";

const selectTagReducer = (state: RootState): TagsState => state.tags;

export const selectTags = createSelector([selectTagReducer], (tagsSlice) => tagsSlice.tags);

// [key: tag.id]: Tag
export const selectTagsMap = createSelector([selectTags], (tags) =>
  tags.reduce<TagMap>((acc, tag) => {
    const { id } = tag;
    acc[id] = tag;
    return acc;
  }, {})
);

export const selectTagsIsLoading = createSelector(
  [selectTagReducer],
  (tagsSlice) => tagsSlice.isLoading
);

export const selectTagsSortedByRecipes = createSelector(
  [selectTags, selectTagsRecipeMap],
  (tagsSlice, tagsRecipeMap) => {
    function compare(a: Tag, b: Tag) {
      const aRecipes = tagsRecipeMap[a.id];
      const bRecipes = tagsRecipeMap[b.id];

      if (aRecipes.length > bRecipes.length) {
        return -1;
      }
      if (aRecipes.length < bRecipes.length) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }

    const tags: Tag[] = [...tagsSlice];
    return tags.filter((ingredient) => tagsRecipeMap[ingredient.id]?.length).sort(compare);
  }
);
