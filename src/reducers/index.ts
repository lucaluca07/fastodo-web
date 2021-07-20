import { combineReducers } from "redux";

import global from "./global";

export default function createRootReducer() {
  return combineReducers({
    global,
  });
}
