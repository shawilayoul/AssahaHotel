import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const ApplayOutStyle = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  overflow: scroll;
`;

const AppLayOut = () => {
  return (
    <ApplayOutStyle>
      <Sidebar />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </ApplayOutStyle>
  );
};

export default AppLayOut;
