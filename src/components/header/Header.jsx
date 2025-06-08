import React from "react";
import {
  HeaderContainerStyled,
  LogoContainerStyled,
  NavbarYLogoContainerStyled,
} from "./HeaderStyled";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <HeaderContainerStyled>
      <NavbarYLogoContainerStyled>
        <LogoContainerStyled>
          <img src="../../../public/IMGS/LOGO.png" alt="" />
        </LogoContainerStyled>
        <Navbar />
      </NavbarYLogoContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Header;
