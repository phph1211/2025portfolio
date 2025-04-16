import React from "react";

import * as S from "./styled";

import { useRecoilState } from "recoil";

import { isModalOpenState } from "../../../store/atoms";

export const ModalBackground: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenState);

  return <S.Background onClick={() => setIsOpen(false)} />;
};
