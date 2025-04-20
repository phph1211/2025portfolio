import React, { useState } from "react";

import { NavBarItems } from "../../../constant";

import { GiHamburgerMenu } from "react-icons/gi";

import { Sidebar } from "../../common/sidebar";

import * as S from "./styled";

export const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <S.HeaderWrapper>
        <S.Logo>PARKHAN</S.Logo>
        <S.NavBar>
          {NavBarItems.map((item, index) => (
            <S.NavBarItem key={index}>{item}</S.NavBarItem>
          ))}

          <S.IconBox onClick={() => setIsSidebarOpen(true)}>
            <GiHamburgerMenu size={25} />
          </S.IconBox>
        </S.NavBar>
      </S.HeaderWrapper>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};
