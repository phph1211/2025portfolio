import React from "react";

import * as S from "./styled";

import { MdOutlineCancel } from "react-icons/md";

import { useRecoilState } from "recoil";

import { isModalOpenState } from "../../../store/atoms";

import { Carousel } from "../carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface MyWorkDetail {
  projectName: string;
  descriptionDetail: string;
  date: string;
  projectImgs: string[];
  techStack: string[];
  myContribute: string[];
  folderName: string;
}

export const MyWorkDetail: React.FC<MyWorkDetail> = ({
  projectName,
  descriptionDetail,
  date,
  projectImgs,
  techStack,
  myContribute,
  folderName,
}) => {
  const [, setIsOpen] = useRecoilState(isModalOpenState);

  return (
    <S.MyWorkDetailWrapper>
      <S.GoBackIcon onClick={() => setIsOpen(false)}>
        <MdOutlineCancel color="#585858" size={50} />
      </S.GoBackIcon>
      <S.MyWorkContent>
        <S.MyWorkDetailHeader>
          <S.ProjectName>{projectName}</S.ProjectName>
          <S.ProjectDate>{date}</S.ProjectDate>
          <p>{descriptionDetail}</p>
        </S.MyWorkDetailHeader>
        <S.MyWorkInfo>
          <Carousel folderName={folderName} carouselImgs={projectImgs} />
          <S.ProjectDetails>
            <S.ContributionBox>
              <p style={{ fontSize: "1.2rem" }}>기여한 부분</p>
              <S.MyContribute>
                {myContribute.map((line, index) => (
                  <p key={index}>• {line}</p>
                ))}
              </S.MyContribute>
            </S.ContributionBox>
            <S.TechStackBox>
              <p style={{ fontSize: "1.2rem" }}>Tech Stack:</p>
              <S.TechStack>{techStack}</S.TechStack>
            </S.TechStackBox>
          </S.ProjectDetails>
        </S.MyWorkInfo>
      </S.MyWorkContent>
    </S.MyWorkDetailWrapper>
  );
};
