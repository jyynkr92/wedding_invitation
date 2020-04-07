import React from "react";
import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import BaseballIcon from "../img/ball-of-baseball.png";
import Header from "./Header";

const Gallery = ({ changePage }) => {
  const tileData = [
    { img: "./wedding/pic1.jpeg", cols: 1 },
    { img: "./wedding/pic3.jpeg", cols: 2 },
    { img: "./wedding/pic2.jpeg", cols: 1 },
    { img: "./wedding/pic4.jpeg", cols: 1 },
    { img: "./wedding/pic5.jpeg", cols: 1 },
    { img: "./wedding/pic6.jpeg", cols: 2 },
    { img: "./wedding/pic8.jpeg", cols: 1 },
    { img: "./wedding/pic7.jpeg", cols: 2 }
  ];
  return (
    <MainDiv>
      <Header changePage={changePage} />
      <MenuName>
        <IconSpan>
          <Deliminator src={BaseballIcon} alt="deliminator" />
        </IconSpan>
        <Title>Gallery</Title>
        <IconSpan>
          <Deliminator src={BaseballIcon} alt="deliminator" />
        </IconSpan>
      </MenuName>
      <GridList cellHeight={160} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
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

const MenuName = styled.div`
  margin-bottom: 20px;
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
export default Gallery;
