import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { getTags } from "../../utils/firebase/firebase.utils";
import { fetchTagsFailed, fetchTagsSuccess } from "./tag.action";
import { TAGS_ACTION_TYPES } from "./tag.types";

export function* fetchTagsAsync() {
  try {
    const tagsArray = yield* call(getTags);
    yield put(fetchTagsSuccess(tagsArray));
  } catch (error) {
    yield put(fetchTagsFailed(error as Error));
  }
}

export function* onFetchTags() {
  yield* takeLatest(TAGS_ACTION_TYPES.FETCH_TAGS_START, fetchTagsAsync);
}

export function* tagsSaga() {
  yield* all([call(onFetchTags)]);
}
