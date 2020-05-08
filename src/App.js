/*global kakao*/
import React, { Component } from "react";
import "./App.css";
import dotenv from "dotenv";
import MainPage from "./components/MainPage";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Visitors from "./components/Visitors";
import { firestore } from "./apis/visitor";
import styled from "styled-components";
import { TextField, Button, Dialog } from "@material-ui/core";

dotenv.config();

class App extends Component {
  state = {
    messageList: [],
    modal: false,
    name: "",
    password: "",
    text: "",
    writePassword: "",
    selectId: "",
  };

  componentDidMount() {
    this.getMessageList();

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=" +
      process.env.REACT_APP_KAKAO_KEY +
      "&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let el = document.getElementById("map");
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(37.5578977, 126.8405562),
          level: 3,
        });

        // 마커가 표시될 위치입니다
        var markerPosition = new kakao.maps.LatLng(37.5578977, 126.8405562);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }

  getMessageList = () => {
    const self = this;

    firestore
      .collection("invitation")
      .orderBy("date")
      .onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach((change) => {
          const childData = change.doc.data();

          if (change.type === "added") {
            self.setState({
              messageList: self.state.messageList.concat(childData),
            });
          } else if (change.type === "removed") {
            self.setState({
              modal: false,
              messageList: self.state.messageList.filter((message) => message.id !== childData.id),
            });
          } else if (change.type === "modified") {
            console.log("modified");
          }
        });
      });
  };

  addMessageList = () => {
    const doc = firestore.collection("invitation");
    const { name, text, password } = this.state;
    const docId = doc.doc().id;

    if (!name || !text || !password) {
      alert("내용을 입력하세요.");
      return;
    }

    const data = {
      id: docId,
      name,
      text,
      date: new Date(),
      password,
    };

    doc.add(data);

    this.setState({
      name: "",
      password: "",
      text: "",
    });
  };

  deleteMessageList = async (e) => {
    e.stopPropagation();
    const { writePassword, selectId } = this.state;

    const doc = firestore.collection("invitation").where("id", "==", selectId);
    await doc.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (writePassword === doc.data().password) {
          doc.ref.delete();
        } else {
          alert("비밀번호가 올바르지 않습니다.");
          return;
        }
      });
    });
  };

  inputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  modalChange = (e) => {
    const { modal } = this.state;
    const { id } = e.target;

    this.setState({
      modal: !modal,
      writePassword: "",
      selectId: id ? id : "",
    });
  };

  phoneCall = (e) => {
    const phone = e.target.getAttribute("data-phone");
    window.open("tel:" + phone);
  };

  messageSend = (e) => {
    const phone = e.target.getAttribute("data-phone");
    window.open("sms:" + phone);
  };

  render() {
    const {
      phoneCall,
      messageSend,
      inputChange,
      addMessageList,
      deleteMessageList,
      modalChange,
    } = this;
    const { messageList, modal, selectId, name, password, text } = this.state;

    return (
      <>
        <MainPage />
        <Welcome phoneCall={phoneCall} messageSend={messageSend} />
        <Gallery />
        <Location />
        <Visitors
          messageList={messageList}
          inputChange={inputChange}
          addMessageList={addMessageList}
          modalChange={modalChange}
          name={name}
          password={password}
          text={text}
        />
        {modal && (
          <Dialog onClose={modalChange} aria-labelledby="simple-dialog-title" open={modalChange}>
            <Wrapper>
              <ModalTitle>비밀번호를 입력하세요.</ModalTitle>
              <TextField
                name="writePassword"
                onChange={inputChange}
                placeholder=""
                variant="outlined"
                type="password"
              />
              <ButtonWrapper>
                <Button variant="outlined" onClick={deleteMessageList} name={selectId}>
                  삭제
                </Button>
                <Button variant="outlined" onClick={modalChange}>
                  취소
                </Button>
              </ButtonWrapper>
            </Wrapper>
          </Dialog>
        )}
      </>
    );
  }
}

const Wrapper = styled.div`
  background-color: white;
  width: 250px;
  height: 186px;
  text-align: center;
  border-radius: 25px;
`;

const ModalTitle = styled.div`
  font-weight: bold;
  padding: 14px 0;
  background-color: #f9f8ef;
  margin-bottom: 14px;
`;

const ButtonWrapper = styled.div`
  margin-top: 17px;

  & button:first-child {
    margin-right: 10px;
  }
`;

export default App;
