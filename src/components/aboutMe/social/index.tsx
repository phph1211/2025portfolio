import React from "react";

import * as S from "./styled";

import gmailPng from "/assets/images/gmail.png";
import githubPng from "/assets/images/github.png";
import instagramPng from "/assets/images/instagram.png";

export const Social: React.FC = () => {
  return (
    <S.SocialWrapper>
      <a href="mailto:bagkan1211@gmail.com" target="_blank">
        <img src={gmailPng} alt="소셜 이미지" />
      </a>
      <a href="https://github.com/phph1211">
        <img src={githubPng} alt="소셜 이미지" />
      </a>
      <a href="https://www.instagram.com/bakan.lilil/" target="_blank">
        <img src={instagramPng} alt="소셜 이미지" />
      </a>
    </S.SocialWrapper>
  );
};
