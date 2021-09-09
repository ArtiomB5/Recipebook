import {recipesReducer} from "./RecipesReducer";
import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type rootReducerType = ReturnType<typeof rootReducer>;