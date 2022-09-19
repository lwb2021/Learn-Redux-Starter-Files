import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducers
import rootReducer from "./reducers/index";

// default data to work with
import comments from "./data/comments";
import posts from "./data/posts";

// create an object for the default data
const defaultState = {
  posts,
  comments,
};

// TODO: configure to make it actually work
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
