import React, { Component } from "react";
import { connect } from "react-redux";
import { createList } from "../actions";

class ActionButton extends Component {
  // text and be initialised or not
  // app will work as long as init state is declared
  state = {
    text: ""
  };

  handleInputChange = event => this.setState({ text: event.target.value });

  handleAddList = () => {
    // const { dispatch } = this.props;
    if (this.state.text) {
      this.setState({
        text: ""
      });
      this.props.createList(this.state.text);
    }
    return;
  };

  render() {
    return (
      <div style={{ background: "pink" }}>
        <input
          placeholder={"Enter your text"}
          autoFocus
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddList}>{"Add List"}</button>
      </div>
    );
  }
}

export default connect(
  null,
  { createList }
)(ActionButton);
