import React, { Component } from "react";
import { connect } from "react-redux";
import { createList } from "../actions";

class List extends Component {
  state = { text: "" };

  onInputChange = event => this.setState({ text: event.target.value });

  handleAddCard = () => {
    const { dispatch } = this.props;
    if (this.state.text) {
      this.setState({
        text: ""
      });
      dispatch(createList(this.state.text));
    }
  };

  render() {
    // list has access to store props as parent App is connected
    console.log("list", this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>Dummy Card</div>
        <form>
          <input
            onChange={this.onInputChange}
            value={this.state.text}
            placeholder="Add Title"
            autoFocus
          />
          <button onClick={this.handleAddCard}>Create List</button>
        </form>
      </div>
    );
  }
}

export default connect()(List);
