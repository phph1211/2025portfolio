import React from "react";

import { Header } from "../../components";

import { AboutMeSection, SkillsSection } from "../../section";

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <AboutMeSection />
      <SkillsSection />
    </>
  );
};
