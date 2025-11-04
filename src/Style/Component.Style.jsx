import styled from "styled-components";

export const Nav = styled.nav`
  position: ${(props) => (props.$sc ? "fixed" : "absolute")};
  left: 0;
  top: 0;

  width: 100%;
  height: auto;
  padding: ${(props) => (props.$sc ? "20px 100px" : "40px 100px")};
  background: ${(props) => (props.$sc ? "#fff" : "transparent")};
  box-shadow: ${(props) =>
    props.$sc ? "0px 4px 6px rgba(0, 0, 0, 0.08)" : "none"};

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 99999;
  transition: 500ms ease-in-out;
`;

export const TitleText = styled.h1`
  font-size: ${(props) => (props.$size ? props.$size : "2rem")};
  font-weight: 400;
  color: ${(props) => (props.$color ? props.$color : "black")};
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 5%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
