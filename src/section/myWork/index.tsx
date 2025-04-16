import React, { useState } from "react";

import {
  MyWorkBox,
  MyWorkDetail,
  SectionTitle,
  ModalBackground,
} from "../../components";

import { projectItmes } from "../../constant";

import { useRecoilState } from "recoil";

import { isModalOpenState } from "../../store/atoms";

import * as S from "./styled";

export const MyWorkSection: React.FC = () => {
  const [isOpen] = useRecoilState(isModalOpenState);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <S.MyWorkSectionLayout id="my work">
        <SectionTitle text="My Works" />
        <S.SkillBoxContainer>
          {projectItmes.projectName.map((item, index) => {
            return (
              <MyWorkBox
                key={index}
                projectName={item}
                date={projectItmes.date[index]}
                description={projectItmes.description[index]}
                tag={projectItmes.tag[index]}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              />
            );
          })}

          {isOpen && (
            <>
              <MyWorkDetail
                myContribute={projectItmes.hanum.contribution}
                techStack={projectItmes.hanum.techStack[selectedIndex]}
                projectName="한움"
                date="2024. 2. 13."
                descriptionDetail={
                  projectItmes.descriptionDetail[selectedIndex]
                }
                projectImgs={projectItmes.hanum.hanumImg}
              />
              <ModalBackground />
            </>
          )}
        </S.SkillBoxContainer>
      </S.MyWorkSectionLayout>
    </>
  );
};
