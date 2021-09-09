import {Link} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import * as Constant from '../../constants'
import * as Style from './MenuStyle'

export const Menu = () => {

  const dispatch = useDispatch();

  const SetDefaultRecipesAC = () => {
    const action = {type: Constant.DEFAULT_RECIPES_AT};
    dispatch(action);
  }

  return (
    <Style.MenuWrapperContainer>
      <Style.MenuBlockContainer>
        <Link to={Constant.PATH_ALL_RECIPES} style={Style.LinkStyle}>
          <Style.MenuButtonContainer>
            {Constant.SHOW_ALL_RECIPES_BTN}
          </Style.MenuButtonContainer>
        </Link>
        <Link to={Constant.PATH_ADD_NEW_RECIPE} style={Style.LinkStyle}>
          <Style.MenuButtonContainer>
            {Constant.ADD_NEW_RECIPE_BTN}
          </Style.MenuButtonContainer>
        </Link>
      </Style.MenuBlockContainer>
      <Style.MenuBlockContainer>
        <Link to={Constant.PATH_NV_RECIPES} style={Style.LinkStyle}>
          <Style.MenuButtonContainer>
            {Constant.SHOW_NV_RECIPES_BTN}
          </Style.MenuButtonContainer>
        </Link>
        <Link to={Constant.PATH_V_RECIPES} style={Style.LinkStyle}>
          <Style.MenuButtonContainer>
            {Constant.SHOW_V_RECIPES_BTN}
          </Style.MenuButtonContainer>
        </Link>
        <Link to={Constant.PATH_ALL_RECIPES} style={Style.LinkStyle}>
          <Style.MenuButtonContainer onClick={SetDefaultRecipesAC}>
            {Constant.DELETE_ALL_RECIPES_BTN}
          </Style.MenuButtonContainer>
        </Link>
      </Style.MenuBlockContainer>
    </Style.MenuWrapperContainer>
  )
}
