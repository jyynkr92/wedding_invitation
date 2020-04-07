import React from "react";
import styled from "styled-components";

const Header = ({ changePage }) => {
  return (
    <HeaderDiv>
      <span onClick={changePage} id="1">
        Welcome
      </span>
      <span onClick={changePage} id="2">
        Gallery
      </span>
      <span onClick={changePage} id="3">
        Location
      </span>
      <span onClick={changePage} id="4">
        Visitors
      </span>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  height: 64px;
  display: table;
  width: 100%;

  & span {
    width: 25%;
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
  }
`;
export default Header;
