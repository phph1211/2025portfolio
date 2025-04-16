import React, { useState } from "react";

import { MyWorkBox, SectionTitle } from "../../components";

import { projectItmes } from "../../constant";

import * as S from "./styled";

export const MyWorkSection: React.FC = () => {
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
              />
            );
          })}
        </S.SkillBoxContainer>
      </S.MyWorkSectionLayout>
    </>
  );
};
