import styled from "styled-components";

export const MyWorkSectionLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
`;

export const MyWorkContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-top: 6rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 678px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
