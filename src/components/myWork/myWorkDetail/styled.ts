import styled from "styled-components";

export const MyWorkDetailWrapper = styled.div`
  width: 83vw;
  height: 95vh;
  border-radius: 12px;
  background-color: white;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 100;
  top: 50%;
  left: 50%;
  padding: 2rem 3rem;
  overflow: scroll;
`;

export const MyWorkContent = styled.div`
  padding: 0 10vw;
  text-align: center;
  line-height: 20px;
  gap: 5rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    padding: auto;
  }
`;

export const MyWorkInfo = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1230px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TechStackBox = styled.div`
  gap: 20px;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 25px;
`;

export const TechStack = styled.p`
  text-align: center;
  gap: 10px;
`;

export const ProjectName = styled.p`
  font-size: 2rem;
`;

export const ProjectDate = styled.p``;

export const MyWorkDetailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 20px;
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

export const GoBackIcon = styled.span`
  cursor: pointer;
`;

export const ProjectImg = styled.img`
  border-radius: 25px;
`;

export const ContributionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 1230px) {
    margin-top: 8rem;
  }
`;

export const MyContribute = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 25px;
  font-size: 1rem;
`;
