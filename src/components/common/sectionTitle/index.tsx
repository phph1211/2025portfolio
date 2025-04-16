import React from "react";

import * as S from "./styled";

export interface SectionTitleProps {
  text: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return <S.SectionTitleText>{text}</S.SectionTitleText>;
};
