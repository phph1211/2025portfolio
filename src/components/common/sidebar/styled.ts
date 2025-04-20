import styled from "styled-components";

export const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CloseIcon = styled.div`
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const SidebarItems = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 20px 0;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    color: #333;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1050;
`;
