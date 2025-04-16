import React from "react";

import { LuArrowDownFromLine } from "react-icons/lu";

import * as S from "./styled";

export const AnimatedArrow: React.FC = () => {
  return (
    <S.ArrowWrapper
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
    >
      <LuArrowDownFromLine />
    </S.ArrowWrapper>
  );
};
