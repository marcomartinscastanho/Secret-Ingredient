import { AnyAction } from "redux";
import { fetchTagsFailed, fetchTagsStart, fetchTagsSuccess } from "./tag.action";
import { Tag } from "./tag.types";

export type TagsState = {
  readonly tags: Tag[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const TAGS_INITIAL_STATE: TagsState = {
  tags: [],
  isLoading: false,
  error: null,
};

export const tagsReducer = (state = TAGS_INITIAL_STATE, action = {} as AnyAction): TagsState => {
  if (fetchTagsStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchTagsSuccess.match(action)) {
    return { ...state, tags: action.payload, isLoading: false };
  }

  if (fetchTagsFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
