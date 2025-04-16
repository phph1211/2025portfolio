import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100vw;
  height: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 4rem;

  @media (max-width: 768px) {
    gap: 3rem;
    padding: 2rem;
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 5rem;
  margin-bottom: 15rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
