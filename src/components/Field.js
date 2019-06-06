import React, { Component } from "react";
import LanguageContext from '../contexts/LanguageContext'

class Field extends Component {
  // this performs a link between our class and the context object
  static contextType = LanguageContext
  render() {
    const text = this.context === 'english' ? 'Name': 'Naam'
    return (
      <div>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
export default Field;
