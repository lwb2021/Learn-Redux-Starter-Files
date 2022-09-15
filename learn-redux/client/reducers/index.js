// root reducer
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import posts from "./posts"; // post reducer
import comments from "./comments"; // comment reducer

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer,
});

export default rootReducer;
