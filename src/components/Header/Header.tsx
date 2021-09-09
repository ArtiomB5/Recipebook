import {Link} from "react-router-dom";
import React from "react";
import * as Constant from '../../constants'
import * as Style from './HeaderStyle'

export const Header = () => {
  return (
    <Style.HeaderContainer>
      <Link
        to={Constant.PATH_ALL_RECIPES}
        style={Style.LinkStyle}
      >
        <Style.TitleContainer>
          {Constant.HEADER_TITLE}
        </Style.TitleContainer>
      </Link>
      <Style.CircleContainer>
      </Style.CircleContainer>
    </Style.HeaderContainer>
  )
}
