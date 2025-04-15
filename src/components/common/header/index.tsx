import React from "react";

import * as S from "./styled";

import { NavBarItems } from "../../../constant";

export const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.Logo>Parkhan</S.Logo>
    </S.HeaderWrapper>
  );
};
