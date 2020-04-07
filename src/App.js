import React, { Component } from "react";
import "./App.css";
import FlippingPages from "flipping-pages";
/* IMPORTANT */
import "flipping-pages/FlippingPages.css";
import MainPage from "./components/MainPage";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Visitors from "./components/Visitors";

class App extends Component {
  constructor(props) {
    super(props);
    this.totalPages = 5;
    this.state = {
      selected: 0
    };
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  handleSelectedChange(selected) {
    this.setState({ selected });
  }

  changePage = e => {
    const selected = e.target.id;
    this.handleSelectedChange(Number(selected));
  };

  previous() {
    this.setState(state => ({
      selected: state.selected - 1
    }));
  }

  next() {
    this.setState(state => ({
      selected: state.selected + 1
    }));
  }

  phoneCall = e => {
    const phone = e.target.getAttribute("data-phone");
    window.open("tel:" + phone);
  };

  messageSend = e => {
    const phone = e.target.getAttribute("data-phone");
    window.open("sms:" + phone);
  };

  render() {
    const { phoneCall, changePage, messageSend } = this;

    return (
      <FlippingPages
        className="App-pages"
        direction="horizontal"
        selected={this.state.selected}
        onSelectedChange={this.handleSelectedChange}
        swipeLength={300}
        /* touch-action attribute is required by pointer events
      polyfill */
        touch-action="none"
        thresholdSpeed={0.5}
      >
        <MainPage />
        <Welcome phoneCall={phoneCall} messageSend={messageSend} changePage={changePage} />
        <Gallery changePage={changePage} />
        <Location changePage={changePage} />
        <Visitors changePage={changePage} />
      </FlippingPages>
    );
  }
}

export default App;
