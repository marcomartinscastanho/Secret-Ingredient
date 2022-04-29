export enum TAGS_ACTION_TYPES {
  FETCH_TAGS_START = "tags/FETCH_TAGS_START",
  FETCH_TAGS_SUCCESS = "tags/FETCH_TAGS_SUCCESS",
  FETCH_TAGS_FAILED = "tags/FETCH_TAGS_FAILED",
}

export type Tag = {
  id: string;
  name: string;
};

export type TagMap = {
  [key: string]: Tag;
};
