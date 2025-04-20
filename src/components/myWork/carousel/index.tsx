import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./styled";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 4000,
  pauseOnHover: false,
};

export interface CarouselProps {
  carouselImgs: string[];
  folderName: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  carouselImgs,
  folderName,
}) => {
  return (
    <S.StyledSlider {...settings}>
      {carouselImgs.map((img, index) => (
        <S.ProjectImg
          key={index}
          src={`./src/assets/images/${folderName}/${img}.png`}
          alt={`프로젝트 이미지`}
        />
      ))}
    </S.StyledSlider>
  );
};
