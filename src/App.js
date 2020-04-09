import React, { Component } from "react";
import "./index.css";
import TopicBrowser from "./components/TopicBrowser/TopicBrowser";
// import Practice from "./components/tests/Practice";
// import Practice2 from "./components/tests/Practice2";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  updateName = word => {
    this.setState({
      name: word
    });
  };
  render() {
    return (
      <div>
        {/* <Practice name={"Matt"} updateName={this.updateName} />
        <Practice name={"Andre"} updateName={this.updateName} />
        {this.state.name}
        <Practice2 /> */}

        <TopicBrowser />
      </div>
    );
  }
}
