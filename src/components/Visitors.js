import React from "react";
import styled from "styled-components";
import BaseballIcon from "../img/ball-of-baseball.png";
import { makeStyles } from "@material-ui/core/styles";

import { TextField, InputAdornment, Button } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import LockIcon from "@material-ui/icons/Lock";
import DeleteIcon from "../img/delete.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginRight: theme.spacing(1),
      width: "44%",
    },
  },
}));

const dateFormat = (str, format) => {
  const date = new Date(str.seconds * 1000);
  return format.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case "yyyy":
        return date.getFullYear();
      case "MM":
        return date.getMonth() + 1 < 10 ? "0" + date.getMonth() : date.getMonth();
      case "dd":
        return date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      case "HH":
        return date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      case "mm":
        return date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      case "ss":
        return date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      default:
        return $1;
    }
  });
};

const Visitors = ({
  messageList,
  inputChange,
  addMessageList,
  modalChange,
  text,
  name,
  password,
}) => {
  const classes = useStyles();
  return (
    <MainDiv>
      <div>
        <IconSpan>
          <Deliminator src={BaseballIcon} alt="deliminator" />
        </IconSpan>
        <Title>축하글을 남겨주세요.</Title>
        <IconSpan>
          <Deliminator src={BaseballIcon} alt="deliminator" />
        </IconSpan>
      </div>
      <WriteWrapper>
        <div>
          <div className={classes.root}>
            <TextField
              name="name"
              onChange={inputChange}
              placeholder="이름"
              value={name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="password"
              type="password"
              onChange={inputChange}
              value={password}
              placeholder="비밀번호"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                maxLength: 4,
              }}
            />
          </div>
          <div>
            <TextField
              name="text"
              onChange={inputChange}
              value={text}
              fullWidth
              placeholder=""
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <div>
            <Button variant="outlined" onClick={addMessageList}>
              축하글 남기기
            </Button>
          </div>
        </div>
      </WriteWrapper>
      <ReadWrapper>
        {messageList &&
          messageList.map((message) => (
            <Messages key={message.name + message.date}>
              <Name>{message.name}</Name>
              <WriteDate>{dateFormat(message.date, "yyyy-MM-dd HH:mm:ss")}</WriteDate>
              <Delete>
                <img src={DeleteIcon} alt="delete" onClick={modalChange} id={message.id} />
              </Delete>
              <Contents>{message.text}</Contents>
            </Messages>
          ))}
      </ReadWrapper>
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
  padding-bottom: 45px;
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

const WriteWrapper = styled.div`
  margin: 25px 0;
  text-align: center;
  text-align: -webkit-center;
  & > div {
    width: 70%;
    padding: 10px 25px 1px;
    border: 1px solid #dcb878;
    border-radius: 23px;

    & > div {
      margin-bottom: 10px;
    }
  }
`;

const ReadWrapper = styled.div`
  margin-top: 10px;
  text-align: left;
  padding: 0 35px;
`;

const WriteDate = styled.span`
  font-size: 13px;
  color: #505050;
`;

const Messages = styled.div`
  margin-top: 14px;
`;

const Name = styled.span`
  margin-right: 25px;
  width: 20%;
  height: 35px;
  font-weight: bold;
  font-size: 16px;
`;

const Contents = styled.div`
  margin: 6px 0;
  padding-bottom: 6px;
  border-bottom: 1px solid #d9d9d9;
`;

const Delete = styled.span`
  float: right;

  & img {
    width: 15px;

    cursor: pointer;
  }
`;
export default Visitors;
