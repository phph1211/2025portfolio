import React from "react";

import * as S from "./styled";

import { NavBarItems } from "../../../constant";

export const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.Logo>Parkhan</S.Logo>
      <S.NavBar>
        {NavBarItems.map((item, index) => {
          return <S.NavBarItem key={index}>{item}</S.NavBarItem>;
        })}
      </S.NavBar>
    </S.HeaderWrapper>
  );
};
