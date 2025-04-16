import React from "react";

import * as S from "./styled";

import {
  Profile,
  AboutMeText,
  AnimatedArrow,
  SectionTitle,
} from "../../components";

export const AboutMeSection: React.FC = () => {
  return (
    <S.SectionWrapper>
      <S.ContentWrapper>
        <Profile />
        <S.TextContent>
          <SectionTitle text="About Me" />
          <AboutMeText />
        </S.TextContent>
      </S.ContentWrapper>

      <AnimatedArrow />
    </S.SectionWrapper>
  );
};
