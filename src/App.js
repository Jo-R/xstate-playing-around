import React from "react";
import { Login } from "./components/features/Login";
import styled from "styled-components";

function App() {
  

  return (
    <>
      <CenteredHeader>
        <h1>Logging in with x-state</h1>
      </CenteredHeader>
      <Login />
    </>
  );
}

export default App;

const CenteredHeader = styled.div`
  display: grid;
  place-items: center;
  padding-top: 3em;
  font-family: "Audiowide", cursive;
  color: ${({ theme }) => theme.colors.contrast};
`;