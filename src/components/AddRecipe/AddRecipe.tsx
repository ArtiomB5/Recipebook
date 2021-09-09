import {GiFruitBowl, GiSteak, GiCook} from "react-icons/gi";
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {v1 as uuidv1} from 'uuid';
import * as Constant from '../../constants'
import * as Style from './AddRecipeStyle'

export const AddRecipe = () => {
  const [nonVegan, setNonVegan] = useState(true);

  const initialLocalState = {
    recipeTitle: '',
    recipeIMGLink: '',
    recipeIngredients: '',
    recipeProcess: '',
    recipeHashtag: '',
    id: ''
  }

  type InitialStateType = {
    recipeTitle: string,
    recipeIMGLink: string,
    recipeIngredients: string,
    recipeProcess: string,
    recipeHashtag: string,
    id: string
  }

  type StateKeysType =  keyof InitialStateType

  const [localState, setLocalState] = useState<InitialStateType>(initialLocalState);

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const objectCopy = {...localState};
    objectCopy[event.currentTarget.name as StateKeysType] = event.currentTarget.value;
    setLocalState(objectCopy);
  }

  const onChangeHandlerRadio = () => {
    setNonVegan(!nonVegan);
  }

  const dispatch = useDispatch();

  const AddRecipeAC = () => {
    const action = {type: Constant.ADD_RECIPE_AT, payload: localState};
    dispatch(action);
  }

  const addRecipeHandler = () => {
    if (
      localState.recipeTitle === '' ||
      localState.recipeProcess === '' ||
      localState.recipeIngredients === '' ||
      localState.recipeIMGLink === ''
    ) {
      alert(Constant.USER_ALERT_MSG)
    } else {
      localState['recipeHashtag'] = nonVegan ?
        Constant.NON_VEGAN_HT :
        Constant.VEGAN_HT;
      localState['id'] = uuidv1();
      console.log(localState.recipeHashtag);
      AddRecipeAC();
      setLocalState(initialLocalState);
    }
  }

  return (
    <Style.AddRecipeWrapperContainer>
      <h2>Adding a new recipe</h2>

      <div>Recipe title:</div>
      <Style.TitleAndLinkTextAreaContainer
        value={localState.recipeTitle}
        onChange={onChangeHandler}
        name={'recipeTitle'}
      />

      <Style.AddRecipeLineContainer/>

      <div>IMG link:</div>
      <Style.TitleAndLinkTextAreaContainer
        value={localState.recipeIMGLink}
        onChange={onChangeHandler}
        name={'recipeIMGLink'}
      />

      <Style.AddRecipeLineContainer/>

      <div>Ingredients:</div>
      <Style.TextAreaStyleContainer
        value={localState.recipeIngredients}
        onChange={onChangeHandler}
        name={'recipeIngredients'}
      />

      <Style.AddRecipeLineContainer/>

      <div>Process:</div>
      <Style.TextAreaStyleContainer
        value={localState.recipeProcess}
        onChange={onChangeHandler}
        name={'recipeProcess'}
      />

      <Style.AddRecipeLineContainer/>

      <input
        type="radio"
        value={Constant.VEGAN_HT}
        checked={!nonVegan}
        onChange={onChangeHandlerRadio}
      />
      #vegan <GiFruitBowl/>
      <br/>
      <input
        type="radio"
        value={Constant.NON_VEGAN_HT}
        checked={nonVegan}
        onChange={onChangeHandlerRadio}
      />
      #non-vegan <GiSteak/>

      <Style.AddRecipeLineContainer/>

      <Style.AddRecipeButtonContainer onClick={addRecipeHandler}>
        Add recipe <GiCook/>
      </Style.AddRecipeButtonContainer>
    </Style.AddRecipeWrapperContainer>
  )
}
