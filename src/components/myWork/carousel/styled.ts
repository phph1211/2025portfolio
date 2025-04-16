import styled from "styled-components";

import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  width: 17rem;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    bottom: -30px;
  }
`;

export const ProjectImg = styled.img`
  border-radius: 25px;
`;
