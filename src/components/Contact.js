import React from "react";
import styled from "styled-components";
import BaseballIcon from "../img/ball-of-baseball.png";
import PhoneIcon from "../img/smartphone.png";
import Mailicon from "../img/email.png";

const Contact = ({ position, name, phone, isParent, phoneCall, messageSend }) => {
  return (
    <ContactDiv>
      <IconSpan>
        <Deliminator src={BaseballIcon} alt="deliminator" />
      </IconSpan>
      <span>{position}</span>
      <Name isParent={isParent}>{name}</Name>
      {isParent ? (
        <ParnetDiv>
          <ContactSpan>
            <ContactIcon onClick={phoneCall} src={PhoneIcon} alt="deliminator" data-phone={phone} />
          </ContactSpan>
          <IconSpan>
            <ContactIcon
              onClick={messageSend}
              src={Mailicon}
              alt="deliminator"
              data-phone={phone}
            />
          </IconSpan>
        </ParnetDiv>
      ) : (
        <>
          <ContactSpan>
            <ContactIcon onClick={phoneCall} src={PhoneIcon} alt="deliminator" data-phone={phone} />
          </ContactSpan>
          <IconSpan>
            <ContactIcon
              onClick={messageSend}
              src={Mailicon}
              alt="deliminator"
              data-phone={phone}
            />
          </IconSpan>
        </>
      )}
    </ContactDiv>
  );
};

const ContactDiv = styled.div`
  margin-top: 10px;
`;

const IconSpan = styled.span`
  vertical-align: middle;
  margin-right: 10px;
`;

const ContactSpan = styled.span`
  vertical-align: middle;
  margin-right: 22px;
`;

const Deliminator = styled.img`
  width: 15px;
`;

const ContactIcon = styled.img`
  width: 25px;
`;

const ParnetDiv = styled.div`
  margin-top: 10px;
  padding-left: 24px;
`;

const Name = styled.span`
  margin-left: 10px;
  margin-right: ${(props) => (props.isParent ? "10px" : "16%")};
`;

export default Contact;
