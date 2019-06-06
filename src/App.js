import React, { Component } from "react";
import UserCreate from "./UserCreate";

class App extends Component {
  state = { language: "english" };

  onLangugeChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div style={{ margin: 0, padding: 0 }}>
        <button onClick={() => this.onLangugeChange("english")}>English</button>
        <button onClick={() => this.onLangugeChange("dutch")}>Dutch</button>
        {this.state.language}
        <UserCreate />
      </div>
    );
  }
}

export default App;
