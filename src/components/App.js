import React from "react";
import { connect } from "react-redux";
import List from "./List";
import { createList } from "../actions";

const App = ({ lists, createList }) => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      {lists.map(list => (
        <ul id={list.id}>
          <List list={list} createList={createList} />
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { lists: state.lists };
};
export default connect(
  mapStateToProps,
  { createList }
)(App);
