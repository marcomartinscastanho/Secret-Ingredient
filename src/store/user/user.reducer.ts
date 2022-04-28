import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import {
  setIsProfileMenuOpen,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.action";

export type UserState = {
  readonly isProfileMenuOpen: boolean;
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  isProfileMenuOpen: false,
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setIsProfileMenuOpen.match(action)) {
    return { ...state, isProfileMenuOpen: action.payload };
  }

  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)) {
    return { ...state, error: action.payload };
  }

  return state;
};
