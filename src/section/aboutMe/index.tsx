import React from "react";

import { Social } from "../../components";

import * as S from "./styled";

import {
  Profile,
  AboutMeText,
  AnimatedArrow,
  SectionTitle,
} from "../../components";

export const AboutMeSection: React.FC = () => {
  return (
    <S.SectionWrapper id="about">
      <S.ContentWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Profile />
          <Social />
        </div>

        <S.TextContent>
          <SectionTitle text="About Me" />
          <AboutMeText />
        </S.TextContent>
      </S.ContentWrapper>
      <AnimatedArrow />
    </S.SectionWrapper>
  );
};
