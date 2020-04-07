import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainDiv>
      <Date>06.20</Date>
      <Image>
        <TopImage src="./wedding/pic6.jpeg" alt="test" />
      </Image>
      <Contents>
        <Couple>유은정 & 구동수</Couple>
        <Message>Love does not consist in gazing at each other,</Message>
        <Message>but looking together in the same direction</Message>
      </Contents>
      <CenterLine />
      <Location>
        <div>2020년 06월 20일 토요일 오후 1시 20분</div>
        <div>블리스 웨딩컨벤션 블리스홀 / 4층</div>
      </Location>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  max-width: 425px;
  text-align: center;
  margin: auto;
  height: 100vh;
  max-height: 812px;
  overflow: hidden;
  background-color: #f9f8ef;
`;
const Location = styled.div`
  font-size: 13px;
  height: 8%;
`;
const Couple = styled.div`
  font-size: 17px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Message = styled.div`
  font-size: 12px;
`;

const Contents = styled.div`
  height: 10%;
`;
const Image = styled.div`
  margin-top: 10px;
  height: 44%;
`;
const Date = styled.div`
  margin-top: 10%;
  text-align: left;
  margin-left: 10px;
  font-size: 26px;
  font-weight: bold;
`;

const CenterLine = styled.div`
  border-left: 1px solid #b1a6a6;
  height: 14%;
  margin-left: calc(50% - 3px);
  margin-top: 8%;
  margin-bottom: 8%;
`;
const TopImage = styled.img`
  width: 100%;
`;

export default MainPage;
