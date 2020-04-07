import React from "react";
import styled from "styled-components";
import BaseballIcon from "../img/ball-of-baseball.png";
import Header from "./Header";

const Visitors = ({ changePage }) => {
  return (
    <MainDiv>
      <Header changePage={changePage} />
      <div>
        <IconSpan>
          <Deliminator src={BaseballIcon} alt="deliminator" />
        </IconSpan>
        <Title>축하글을 남겨주세요.</Title>
        <IconSpan>
          <Deliminator src={BaseballIcon} alt="deliminator" />
        </IconSpan>
      </div>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  max-width: 425px;
  text-align: center;
  margin: auto;
  height: 100vh;
  max-height: 812px;
  background-color: #f9f8ef;
`;

const Title = styled.span`
  margin: 0 20px;
  font-weight: bold;
`;

const IconSpan = styled.span`
  vertical-align: middle;
  margin-right: 10px;
`;

const Deliminator = styled.img`
  width: 15px;
`;

export default Visitors;
