import { combineReducers } from "@reduxjs/toolkit";
import auth from "app/auth/store";
import { debounce } from "lodash";
import fuse from "./fuse";
import i18n from "./i18nSlice";
import ListStepperReducer from "./../main/Host/ListStepper/store/index";

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    fuse,
    i18n,
    ListStepperReducer,
    ...asyncReducers,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === "auth/user/userLoggedOut") {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
