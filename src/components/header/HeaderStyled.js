import styled from "styled-components";

export const HeaderContainerStyled = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(40, 44, 52, 0.55);
  border-bottom: 1px solid #ccc;
  /* border: 1px solid white; */
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 5px 0;
  }
  @media (max-width: 480px) {
    padding: 2px 0;
  }
`;

export const LogoContainerStyled = styled.div`
  height: 60px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 26px;

  img {
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const NavbarYLogoContainerStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  /* border: 1px solid white; */

  @media (max-width: 768px) {
    height: 50px;
  }
`;
