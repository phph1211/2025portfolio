import styled from "styled-components";

export const MyWorkBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 15px;
  background-color: white;
  width: 100%;
  min-height: 250px;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: -1;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    min-height: 230px;
  }
`;

export const MyWorkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`;

export const ProjectName = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

export const Tag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0.3rem 1rem;
  border-radius: 50px;
  background-color: rgb(222, 133, 51);
  color: white;
  font-size: 0.9rem;
`;

export const DateText = styled.p`
  font-size: 0.95rem;
  color: #888;
  margin: 0;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;
  color: #333;
  margin: 0;
`;

export const SeeDetail = styled.p`
  font-size: 0.95rem;
  color: gray;
  text-align: right;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
