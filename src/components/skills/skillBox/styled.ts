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
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  box-shadow: rgba(0, 0, 0, 0.1) 10px 10px 30px;

  &:hover {
    transform: scale(1.1);
  }
`;
