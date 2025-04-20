import React from "react";

import * as S from "./styled";

import { useRecoilState } from "recoil";

import { isModalOpenState } from "../../../store/atoms";

export interface MyWorkBoxProps {
  projectName: string;
  tag: string;
  date: string;
  description: string;
  onClick?: () => void;
}

export const MyWorkBox: React.FC<MyWorkBoxProps> = ({
  projectName,
  tag,
  date,
  description,
  onClick,
}) => {
  const [, setIsOpen] = useRecoilState(isModalOpenState);

  return (
    <S.MyWorkBoxWrapper>
      <S.MyWorkContent>
        <S.ProjectName>{projectName}</S.ProjectName>
        <S.Tag>{tag}</S.Tag>
        <S.DateText>{date}</S.DateText>
        <S.ProjectDescription>{description}</S.ProjectDescription>
      </S.MyWorkContent>
      <S.SeeDetail
        onClick={() => {
          setIsOpen(true);
          onClick && onClick();
        }}
      >
        자세히 보기
      </S.SeeDetail>
    </S.MyWorkBoxWrapper>
  );
};
