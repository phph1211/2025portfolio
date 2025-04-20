import styled from "styled-components";

export const ProfileImg = styled.img`
  height: 20rem;
  border-radius: 15px;

  @media screen and (max-width: 900px) {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 5rem;
  }
`;
