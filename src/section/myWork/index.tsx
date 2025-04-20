import React, { useState } from "react";

import {
  MyWorkBox,
  MyWorkDetail,
  SectionTitle,
  ModalBackground,
} from "../../components";

import { projectItems } from "../../constant";

import { useRecoilState } from "recoil";

import { isModalOpenState } from "../../store/atoms";

import * as S from "./styled";

export const MyWorkSection: React.FC = () => {
  const [isOpen] = useRecoilState(isModalOpenState);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectedProject = projectItems[selectedIndex];

  return (
    <>
      <S.MyWorkSectionLayout id="mywork">
        <SectionTitle text="My Works" />
        <S.MyWorkContainer>
          {projectItems.map((item, index) => {
            return (
              <MyWorkBox
                key={index}
                projectName={item.projectName}
                date={item.date}
                description={item.description}
                tag={item.tag}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              />
            );
          })}

          {isOpen && (
            <>
              <MyWorkDetail
                myContribute={selectedProject.contribution}
                techStack={selectedProject.techStack}
                projectName={selectedProject.projectName}
                date={selectedProject.date}
                descriptionDetail={selectedProject.descriptionDetail}
                projectImgs={selectedProject.projectImgs}
                folderName={selectedProject.projectName.toLowerCase()}
              />
              <ModalBackground />
            </>
          )}
        </S.MyWorkContainer>
      </S.MyWorkSectionLayout>
    </>
  );
};
