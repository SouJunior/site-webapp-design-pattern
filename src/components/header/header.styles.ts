import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;  
  align-items: center;
  gap: 3rem;
  padding: 2rem 0rem;
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    z-index: 10;
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;


  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #1165BA;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #0070f3;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
