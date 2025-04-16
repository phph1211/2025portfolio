import React from "react";

import { useTypingEffect } from "../../hooks/useTypingEffect";

import { AboutMeTextItem } from "../../constant";

export const AboutMeText: React.FC = () => {
  const typingSpeed = 100;
  const typedText = useTypingEffect(AboutMeTextItem.hashTag, typingSpeed);

  return <div>{typedText}</div>;
};
