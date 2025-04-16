import styled from "styled-components";

export const SkillBoxWrapper = styled.div`
  width: 320px;
  height: 150px;
  border-radius: 12px;
  background-color: white;
  padding: 2vw 20px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: opacity 0.6s ease-out, transform 0.2s ease-out;
  box-shadow: rgba(0, 0, 0, 0.1) 10px 10px 30px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SkillNameText = styled.p`
  font-size: 1.2rem;
`;

export const skillDescriptionText = styled.p``;

export const SkillImg = styled.img`
  width: 3rem;
`;
