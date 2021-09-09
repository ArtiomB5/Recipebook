import styled from "styled-components";

export const TestRecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
`
export const TestRecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  vertical-align: center;
  width: 96%;
  margin: 20px auto;
  text-align: center;
  border: 1px solid #ffcc00;
`
export const TestRecipeHashtagContainer = styled.div`
  padding: 10px;
`

export const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const RecipeContainer = styled.div`
  max-width: 30%;
  margin: 20px auto;
  text-align: center;
  border: 1px solid #ffcc00;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
export const RecipeImgContainer = styled.img`
  max-width: 50%;
  height: auto;
  padding: 20px 10px 10px 10px;
`
export const RecipeIngredientsContainer = styled.div`
  border-bottom: 1px solid #ffcc00;
  padding: 10px;
  max-width: 80%;
  margin: 0 auto;
`
export const RecipeProcessContainer = styled.div`
  border-bottom: 1px solid #ffcc00;
  padding: 10px;
  max-width: 80%;
  margin: 0 auto;
`
export const RecipeHashtagContainer = styled.div`
  padding: 10px;
`