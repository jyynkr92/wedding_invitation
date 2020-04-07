import React from "react";
import styled from "styled-components";
import BaseballIcon from "../img/ball-of-baseball.png";
import Header from "./Header";
import Contact from "./Contact";

const Welcome = ({ phoneCall, messageSend, changePage }) => {
  return (
    <MainDiv>
      <Header changePage={changePage} />
      <div>
        <Contents>
          <WelcomeTitle>
            <IconSpan>
              <Deliminator src={BaseballIcon} alt="deliminator" />
            </IconSpan>
            <Title>초대합니다.</Title>
            <IconSpan>
              <Deliminator src={BaseballIcon} alt="deliminator" />
            </IconSpan>
          </WelcomeTitle>
          <div>
            축복이 내린 날,
            <br />
            서로의 눈빛과 미소를 <br />
            영원히 담아두려고 합니다.
            <br />
            <br />
            함께 웃으며
            <br />
            하나가 되는 모습을 <br />
            지켜봐 주시고 <br />
            축복을 빌어주시기 바랍니다.
          </div>
        </Contents>
        <Contacts>
          <Contact
            position="신랑"
            name="구동수"
            phone="01088689214"
            isParent={false}
            phoneCall={phoneCall}
            messageSend={messageSend}
          />
          <Contact
            position="신부"
            name="유은정"
            phone="01062902072"
            isParent={false}
            phoneCall={phoneCall}
            messageSend={messageSend}
          />
          <ParentContacts>
            <ParentContactTitle>신랑측 혼주</ParentContactTitle>
            <Contact
              position="아버지"
              name="구성태"
              isParent={true}
              phoneCall={phoneCall}
              messageSend={messageSend}
              phone=""
            />
            <Contact
              position="어머니"
              name="박춘희"
              isParent={true}
              phoneCall={phoneCall}
              messageSend={messageSend}
              phone=""
            />
          </ParentContacts>
          <ParentContacts>
            <ParentContactTitle>신부측 혼주</ParentContactTitle>
            <Contact
              position="아버지"
              name="유민환"
              isParent={true}
              phoneCall={phoneCall}
              messageSend={messageSend}
              phone="01052662072"
            />
            <Contact
              position="어머니"
              name="정다경"
              isParent={true}
              phoneCall={phoneCall}
              messageSend={messageSend}
              phone="01041232072"
            />
          </ParentContacts>
        </Contacts>
      </div>
    </MainDiv>
  );
};

const ParentContacts = styled.div`
  width: 50%;
  display: inline-block;
  margin-top: 10%;
`;

const WelcomeTitle = styled.div`
  margin-bottom: 20px;
`;
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

const ParentContactTitle = styled.div`
  font-weight: bold;
`;

const Contents = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
`;

const IconSpan = styled.span`
  vertical-align: middle;
  margin-right: 10px;
`;

const Deliminator = styled.img`
  width: 15px;
`;

const Contacts = styled.div`
  margin-top: 15%;
`;
export default Welcome;
