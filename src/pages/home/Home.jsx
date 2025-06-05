import React from "react";
import { HomeContainerStyled } from "./HomeStyled";

const Home = () => {
  return (
    <HomeContainerStyled>
      <img
        src="../../../public/IMGS/LOGO.png"
        alt=""
        style={{
          height: "450px",
          borderRadius: "10px",
          animation: "levitate 2s ease-in-out infinite alternate",
        }}
      />
      <style>
        {`
                @keyframes levitate {git
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-20px); }
                }
            `}
      </style>
    </HomeContainerStyled>
  );
};

export default Home;
