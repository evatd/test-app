import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

// On the receiving / component end
class Button extends Component {
  // not needed when using Provider - only to access data via this.context
  // static contextType = LanguageContext

  renderSubmit = value => (value === "english" ? "Submit" : "Voorleegen");
  render() {
    // we're providing a function as a child to the component
    // this child is called with whatever value is in the pipe (Consumer) -
    // see value in Provider: value={this.state.language}
    // wrap this consumer logic in the desired HTML element = button
    return (
      <button>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
