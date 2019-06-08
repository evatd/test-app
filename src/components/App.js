import React from "react";
import { connect } from "react-redux";
import List from "./List";

const App = ({ lists }) => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      {lists.map(list => (
        <List key={list.id} title={list.title} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { lists: state.lists };
};
export default connect(mapStateToProps)(App);
