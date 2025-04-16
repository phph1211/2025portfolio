import React from "react";

import { useTypingEffect } from "../../hooks/useTypingEffect";

import { AboutMeTextItem } from "../../constant";

import * as S from "./styled";

export const AboutMeText: React.FC = () => {
  const typingSpeed = 100;
  const typedText = useTypingEffect(AboutMeTextItem.hashTag, typingSpeed);

  const separateText = AboutMeTextItem.about.split("\n");

  return (
    <S.TextWrapper>
      <S.AboutText>
        {separateText.map((item, index) => {
          return <S.AboutText key={index}>{item}</S.AboutText>;
        })}
      </S.AboutText>
      <S.HashTag>{typedText}</S.HashTag>
    </S.TextWrapper>
  );
};
