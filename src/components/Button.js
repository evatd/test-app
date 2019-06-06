import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

// On the receiving / component end: see how you wrapped its parent
// i.e.  UserCreate in the context, and we can access this data in Button
// without passing it through the latter first
class Button extends Component {
  // not needed when using Provider - only to access data via this.context
  // static contextType = LanguageContext

  renderSubmit = value => (value === "english" ? "Submit" : "Voorleegen");

  renderButton = color => (
    <button
      css={`
        color: ${color};
      `}
    >
      <LanguageContext.Consumer>
        {value => this.renderSubmit(value)}
      </LanguageContext.Consumer>
    </button>
  );
  render() {
    // We're providing a function as a child to the component
    // this child is called with whatever value is in the pipe (Consumer) -
    // See value in Provider: value={this.state.language}
    // wrap this consumer logic in the desired HTML element = button
    // Note how you can call this prop color if you want - or value - up to you
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
