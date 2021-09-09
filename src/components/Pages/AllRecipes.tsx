import {payloadType} from "../../store/RecipesReducer";
import {restoreState} from "../localStorage/LocalStorage";
import * as Style from './PagesStyle'

export const AllRecipes = () => {
  const allRecipes: Array<payloadType> = restoreState<Array<payloadType>>(
    'state', []
  );

  const renderRecipes = allRecipes.map((item:any, index) => {
    return (
      <Style.RecipeContainer key={index}>
        <h3>
          {item.recipeTitle}
        </h3>
        <Style.RecipeImgContainer
          src={item.recipeIMGLink}
          alt={item.recipeTitle}
        />
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

  // const renderRecipes = allRecipes.map((item:any, index) => {
  //   return (
  //     <Style.TestRecipeContainer key={index}>
  //       <Style.TestRecipeHashtagContainer>
  //         {item.recipeTitle}
  //       </Style.TestRecipeHashtagContainer>
  //       <Style.TestRecipeHashtagContainer>
  //         {item.recipeHashtag}
  //       </Style.TestRecipeHashtagContainer>
  //     </Style.TestRecipeContainer>
  //   )
  // });
  //
  // const renderHeader = () => {
  //   return(
  //     <Style.TestRecipeContainer>
  //       <h2>
  //         Header
  //       </h2>
  //       <h2>
  //         Hashtag
  //       </h2>
  //     </Style.TestRecipeContainer>
  //   )
  // }

  return (
    <Style.RecipesContainer>
      {renderRecipes}
    </Style.RecipesContainer>
  )
}
