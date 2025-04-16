import React from "react";

import * as S from "./styled";

import ProfileImg from "../../../assets/images/mycat.jpg";

export const Profile: React.FC = () => {
  return <S.ProfileImg src={ProfileImg} alt="프로필 이미지" />;
};
