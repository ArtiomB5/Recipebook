import { v1 as uuidv1 } from 'uuid';
import {restoreState, saveState} from "../components/localStorage/LocalStorage";
import * as Constant from '../constants'

export type payloadType = {
  recipeTitle: string;
  recipeIMGLink: string;
  recipeIngredients: string;
  recipeProcess: string;
  recipeHashtag: '#vegan' | '#non-vegan';
  id: string;
}

type actionType = {
  type: 'DEFAULT_RECIPES' | 'ADD_RECIPE' | 'ALL_RECIPES'
  payload?: payloadType
}

export const defaultState = [
  {
    recipeTitle: Constant.DEFAULT_VEGAN_RECIPE_TITLE,
    recipeIMGLink: Constant.DEFAULT_VEGAN_RECIPE_IMG_LINK,
    recipeIngredients: Constant.DEFAULT_VEGAN_RECIPE_INGREDIENTS,
    recipeProcess: Constant.DEFAULT_VEGAN_RECIPE_PROCESS,
    recipeHashtag: Constant.VEGAN_HT,
    id: uuidv1(),
  },
  {
    recipeTitle: Constant.DEFAULT_NON_VEGAN_RECIPE_TITLE,
    recipeIMGLink: Constant.DEFAULT_NON_VEGAN_RECIPE_IMG_LINK,
    recipeIngredients: Constant.DEFAULT_NON_VEGAN_RECIPE_INGREDIENTS,
    recipeProcess: Constant.DEFAULT_NON_VEGAN_RECIPE_PROCESS,
    recipeHashtag: Constant.NON_VEGAN_HT,
    id: uuidv1(),
  }
]

// defaultState => case: setRecipes
// go to ui component create useEffect

// useEffect => with deps []

// useEffect(() => {
//   dispatch(actionCreator());
// }, []); => empty array it's dependency => зависимости
// without [], [] => empty array, [tags] => work when change deps => tags

// first render component => [] empty

// ui => const state = useSelector... => get state

// const qwe = useSelector<AllStateType, string>(state => state)

// second useEffect(saveState('state', state from useSelector), [])

//useEffect

export const recipesReducer = (
  state = defaultState,
  action: actionType
) => {
  switch (action.type) {
    case Constant.DEFAULT_RECIPES_AT:
      saveState('state', defaultState);
      return defaultState
    case Constant.ADD_RECIPE_AT:
      const newRecipe = {
        recipeTitle: action.payload?.recipeTitle,
        recipeIMGLink: action.payload?.recipeIMGLink,
        recipeIngredients: action.payload?.recipeIngredients,
        recipeProcess: action.payload?.recipeProcess,
        recipeHashtag: action.payload?.recipeHashtag,
      }
      saveState('state', [...state, newRecipe]);
      // const allRecipes: Array<payloadType> = restoreState<Array<payloadType>>('state', [])
      // return [...state, newRecipe]
      return restoreState<Array<payloadType>>('state', [])
    case Constant.ALL_RECIPES_AT:
      return state
    default:
      return state
  }
}
