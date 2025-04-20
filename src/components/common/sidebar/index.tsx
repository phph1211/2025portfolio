import React from "react";

import { IoClose } from "react-icons/io5";

import { NavBarItems } from "../../../constant";

import * as S from "./styled";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <S.SidebarWrapper isOpen={isOpen}>
        <S.CloseIcon onClick={onClose}>
          <IoClose size={30} />
        </S.CloseIcon>
        <S.SidebarItems>
          {NavBarItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </S.SidebarItems>
      </S.SidebarWrapper>
      {isOpen && <S.Overlay onClick={onClose} />}
    </>
  );
};
