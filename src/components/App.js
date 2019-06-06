import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
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
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
