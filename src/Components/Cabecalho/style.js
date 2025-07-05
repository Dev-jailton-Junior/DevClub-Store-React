import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 20px 50px;
  background: rgba(15, 15, 30, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 20px;
    align-items: center;
    gap: 10px;
  }
`;

export const HeaderLogo = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: #00f7ff;
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Lista = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const NavLink = styled.div`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #00f1ff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
