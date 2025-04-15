import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 40px;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const NavBar = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.5vw;
`;

export const NavBarItem = styled.li`
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  color: #2e2e2e;

  &:hover {
    color: black;
  }
`;
