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
      {skillName}
      {description}
      {skillImg}
    </S.SkillBoxWrapper>
  );
};
