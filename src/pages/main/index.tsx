import React from "react";

import { Header } from "../../components";

import { AboutMeSection, SkillsSection, MyWorkSection } from "../../section";

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <AboutMeSection />
      <SkillsSection />
      <MyWorkSection />
    </>
  );
};
