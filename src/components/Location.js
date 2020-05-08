import React, { Component } from "react";
import styled from "styled-components";
import BaseballIcon from "../img/ball-of-baseball.png";
// import LocationImg from "../img/location.png";
import LocationImg from "../img/kakaomap.png";
import kakaonavi from "../img/kakaonavi_btn_small.png";
import tmapIcon from "../img/tmap_icon.png";
import BusIcon from "../img/bus.png";
import SubwayIcon from "../img/subway.png";
import ParkingIcon from "../img/parking.png";
import DotImg from "../img/dot.png";

class Location extends Component {
  findMap = () => {
    window.open(
      "https://map.kakao.com/link/map/블리스웨딩컨벤션,37.5578977,126.84055620",
      "_blank"
    );
  };

  clickMap = () => {
    window.open("https://map.kakao.com/link/to/블리스웨딩컨벤션,37.5578977,126.84055620", "_blank");
  };

  tmapNavi = () => {
    window.open(
      "https://api2.sktelecom.com/tmap/app/routes?appKey=ff6b0742-4c4d-40c9-b3c6-90fb8a7e335e&name=블리스웨딩컨벤션&lon=126.84055620&lat=37.5578977",
      "_blank"
    );
  };
  render() {
    return (
      <MainDiv>
        <div>
          <IconSpan>
            <Deliminator src={BaseballIcon} alt="deliminator" />
          </IconSpan>
          <Title>찾아오시는 길</Title>
          <IconSpan>
            <Deliminator src={BaseballIcon} alt="deliminator" />
          </IconSpan>
        </div>
        <MapDiv id="map">
          {/* <img src={LocationImg} alt="bliss" onClick={this.clickMap} /> */}
        </MapDiv>
        <Navigation>
          <div>
            <img id="kakaomap" src={LocationImg} onClick={this.findMap} alt="kakaomap" />{" "}
            <img id="kakao" src={kakaonavi} onClick={this.clickMap} alt="kakaonavi" />{" "}
            <img id="tmap" src={tmapIcon} onClick={this.tmapNavi} alt="tmap" />
          </div>
        </Navigation>
        <WeddingLocation>
          <Floor>블리스웨딩컨벤션 4층 블리스홀</Floor>
          <Address>서울시 강서구 공항대로 298</Address>
        </WeddingLocation>
        <div>Tel. 02.3664.6006</div>
        <Transportation>
          <Transport>
            <Line>
              <img src={ParkingIcon} alt="parking" />
              &nbsp;&nbsp;주차장 안내
            </Line>
            <img className="dot" src={DotImg} alt="dot" />
            &nbsp;전용 주차장 이용(2시 간 무료)
          </Transport>
          <Transport>
            <Line>
              <img src={SubwayIcon} alt="subway" />
              &nbsp;&nbsp;지하철 안내
            </Line>
            <Line>
              <img className="dot" src={DotImg} alt="dot" />
              &nbsp;서울 5호선 "발산역" 하차 5번 출구
            </Line>
            <img className="dot" src={DotImg} alt="dot" />
            &nbsp;도보이용 : 1분거리내
          </Transport>
          <Transport>
            <Line>
              <img src={BusIcon} alt="bus" />
              &nbsp;&nbsp;버스 안내
            </Line>
            {/* <Line>&nbsp; &nbsp; "발산역 하차"</Line> */}
            <Line>
              <img className="dot" src={DotImg} alt="dot" />
              &nbsp; 간선(파랑)601, 605, 661
            </Line>
            <Line>
              <img className="dot" src={DotImg} alt="dot" />
              &nbsp; 지선(초록)6630, 6632, 6642, 6712
            </Line>
            <Line>
              <img className="dot" src={DotImg} alt="dot" />
              &nbsp; 광역 3000, 8000
            </Line>
            <Line>
              <img className="dot" src={DotImg} alt="dot" />
              &nbsp; 공항 6000, 6003, 6008
            </Line>
            <Line>
              <img className="dot" src={DotImg} alt="dot" />
              &nbsp; 경기 60, 60-3, 69, 88
            </Line>
          </Transport>
        </Transportation>
      </MainDiv>
    );
  }
}

const MainDiv = styled.div`
  max-width: 425px;
  text-align: center;
  margin: auto;
  background-color: #f9f8ef;
  padding-top: 75px;
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

const MapDiv = styled.div`
  width: 100%;
  height: 400px;
  margin: 10px 0;
`;

const Navigation = styled.div`
  text-align: right;
  & div {
    width: 90%;
    margin: auto;
  }
  & img {
    width: 40px;
    height: 40px;
    border: 1px solid #d9d9d9;
  }
`;

const Transportation = styled.div`
  width: 90%;
  margin: auto;
  text-align: left;
  margin-top: 20px;
`;

const TransportationTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const WeddingLocation = styled.div`
  margin-top: 16px;
`;

const Floor = styled.div`
  font-weight: bold;
  margin-bottom: 7px;
  font-size: 18px;
`;
const Address = styled.div``;

const Line = styled.div`
  margin-bottom: 7px;
`;

const Transport = styled.div`
  margin-top: 17px;

  & img {
    width: 21px;
  }

  & img.dot {
    width: 12px;
    margin-left: 13px;
  }
`;

export default Location;
