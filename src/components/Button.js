import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

// On the receiving / component end
// 1. set up contextType property
// 2. access the data via this.context

// When we use this property, we're adding this property directly to the comp 
// so you 1. can declare contextType as a static property inside of a class
// 2. Button.contextType = LanguageContext
class Button extends Component {
  static contextType = LanguageContext
  render() {
    // Prints the default value 'english'
    console.log(this.context)
    return <button>Submit</button>;
  }
}

export default Button;
