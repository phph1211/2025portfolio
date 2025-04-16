import React from "react";

import * as S from "./styled";

export interface MyWorkBoxProps {
  projectName: string;
  tag: string;
  date: string;
  description: string;
}

export const MyWorkBox: React.FC<MyWorkBoxProps> = ({
  projectName,
  tag,
  date,
  description,
}) => {
  return (
    <S.MyWorkBoxWrapper>
      <S.MyWorkContent>
        <S.ProjectName>{projectName}</S.ProjectName>
        <S.Tag>{tag}</S.Tag>
        <S.DateText>{date}</S.DateText>
        <S.ProjectDescription>{description}</S.ProjectDescription>
      </S.MyWorkContent>
      <S.SeeDetail>자세히 보기</S.SeeDetail>
    </S.MyWorkBoxWrapper>
  );
};
