import React, { Component } from "react";
import { connect } from "react-redux";
import { createList } from "../actions";

class List extends Component {
  state = { text: "" };

  onInputChange = event => this.setState({ text: event.target.value });

  render() {
    // list has access to store props as parent App is connected
    console.log("list", this.state.text, this.props);
    return (
      <li key={this.props.list.id}>
        <h1>{this.props.list.title}</h1>
        <div>Dummy Card</div>
        <form>
          <input
            onChange={this.onInputChange}
            text={this.state.text}
            placeholder="Add Title"
          />
          <button onClick={() => this.props.createList(this.state.text)}>
            Create List
          </button>
        </form>
      </li>
    );
  }
}

const mapStateToProps = state => {
  // createList won't be visible here as
  // props include store (data) and ACs (not in store)
  console.log("list state", state);
  return { lists: state.lists };
};

export default connect(
  mapStateToProps,
  { createList }
)(List);
