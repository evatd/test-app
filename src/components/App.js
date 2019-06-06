import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
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
        {/* hardcoded value for illustration: wrapping order doesnt matter */}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
