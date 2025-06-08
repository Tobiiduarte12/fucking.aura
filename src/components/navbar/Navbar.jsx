import React from "react";
import { NavContainerStyled, NavLinkStyled } from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavContainerStyled>
      <NavLinkStyled href="#">Inicio</NavLinkStyled>
      <NavLinkStyled href="#">Productos</NavLinkStyled>
      <NavLinkStyled href="#">Servicios</NavLinkStyled>
    </NavContainerStyled>
  );
};

export default Navbar;
