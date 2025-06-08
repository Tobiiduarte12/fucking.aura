import React from "react";
import { LayOutStyled } from "./LayOutStyled";
import Home from "../../pages/home/Home";
import Header from "../header/Header";

const LayOut = () => {
  return (
    <LayOutStyled>
      <Header />
      <Home />
    </LayOutStyled>
  );
};

export default LayOut;
