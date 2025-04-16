import React from "react";

import * as S from "./styled";

export interface SkillBoxProps {
  skillName: string;
  skillImg: string;
  description: string;
}

export const SkillBox: React.FC<SkillBoxProps> = ({
  skillName,
  skillImg,
  description,
}) => {
  return (
    <S.SkillBoxWrapper>
      <S.TextBox>
        <S.SkillNameText>{skillName}</S.SkillNameText>
        <S.skillDescriptionText>{description}</S.skillDescriptionText>
      </S.TextBox>
      <S.SkillImg src={skillImg} alt="스킬 이미지" />
    </S.SkillBoxWrapper>
  );
};
