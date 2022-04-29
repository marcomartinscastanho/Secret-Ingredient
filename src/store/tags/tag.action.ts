import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { Tag, TAGS_ACTION_TYPES } from "./tag.types";

export type FetchTagsStart = Action<TAGS_ACTION_TYPES.FETCH_TAGS_START>;
export type FetchTagsSuccess = ActionWithPayload<TAGS_ACTION_TYPES.FETCH_TAGS_SUCCESS, Tag[]>;
export type FetchTagsFailed = ActionWithPayload<TAGS_ACTION_TYPES.FETCH_TAGS_FAILED, Error>;

export const fetchTagsStart = withMatcher(
  (): FetchTagsStart => createAction(TAGS_ACTION_TYPES.FETCH_TAGS_START)
);
export const fetchTagsSuccess = withMatcher(
  (tagsArray: Tag[]): FetchTagsSuccess =>
    createAction(TAGS_ACTION_TYPES.FETCH_TAGS_SUCCESS, tagsArray)
);
export const fetchTagsFailed = withMatcher(
  (error: Error): FetchTagsFailed => createAction(TAGS_ACTION_TYPES.FETCH_TAGS_FAILED, error)
);
