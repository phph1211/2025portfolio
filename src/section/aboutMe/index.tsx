import React from "react";

import * as S from "./styled";

import { Profile, AboutMeText } from "../../components";

export const AboutMeSection: React.FC = () => {
  return (
    <S.SectionWrapper>
      <Profile />
      <AboutMeText />
    </S.SectionWrapper>
  );
};
