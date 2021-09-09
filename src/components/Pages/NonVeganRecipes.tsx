import {payloadType} from "../../store/RecipesReducer";
import {restoreState} from "../localStorage/LocalStorage";
import * as Constant from '../../constants'
import * as Style from './PagesStyle'

export const NonVeganRecipes = () => {
  const allRecipes: Array<payloadType> = restoreState<Array<payloadType>>(
    'state', []
  )

  const nonVeganRecipes = allRecipes.filter(
    item => item.recipeHashtag === Constant.NON_VEGAN_HT
  );

  const renderRecipes = nonVeganRecipes.map(
    (item, index) => {
    return (
      <Style.RecipeContainer key={index}>
        <h3>
          {item.recipeTitle}
        </h3>
        <Style.RecipeImgContainer
          src={item.recipeIMGLink}
          alt={item.recipeTitle}/>
        <Style.RecipeIngredientsContainer>
          <h4>
            Ingredients
          </h4>
          {item.recipeIngredients}
        </Style.RecipeIngredientsContainer>
        <Style.RecipeProcessContainer>
          <h4>
            Process
          </h4>
          {item.recipeProcess}
        </Style.RecipeProcessContainer>
        <Style.RecipeHashtagContainer>
          {item.recipeHashtag}
        </Style.RecipeHashtagContainer>
      </Style.RecipeContainer>
    )
  });

  return (
    <Style.RecipesContainer>
      {renderRecipes}
    </Style.RecipesContainer>
  )
}
