import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getPosts } from "./actions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));
