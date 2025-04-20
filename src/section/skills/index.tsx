import React from "react";

import * as S from "./styled";

import { SkillBox } from "../../components";

import { SectionTitle } from "../../components";

import { skillItem } from "../../constant";

export const SkillsSection: React.FC = () => {
  return (
    <S.SectionWrapper id="skills">
      <SectionTitle text="What can you do ?" />
      <S.SkillBoxContainer>
        {skillItem.skillName.map((item, index) => {
          return (
            <SkillBox
              key={index}
              description={skillItem.skillDescription[index]}
              skillName={item}
              skillImg={`/assets/images/devLangs/${skillItem.imgPath[index]}.png`}
            />
          );
        })}
      </S.SkillBoxContainer>
    </S.SectionWrapper>
  );
};
