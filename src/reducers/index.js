import { combineReducers } from "redux";
import view from "./view";
import error from "./error";

export default combineReducers({ view, error });
