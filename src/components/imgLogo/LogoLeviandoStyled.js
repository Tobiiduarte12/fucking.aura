import styled from "styled-components";

export const ImgLogoLeviandoStyled = styled.img`
  height: 450px;
  border-radius: 10px;
  animation: levitate 2s ease-in-out infinite alternate;

  @keyframes levitate {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`;
