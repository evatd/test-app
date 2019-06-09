import React from "react";
import { connect } from "react-redux";
import List from "./List";
import ActionButton from "./ActionButton";

const App = ({ lists }) => {
  return (
    <div>
      {lists &&
        lists.map(list => <List title={list.title} cards={list.cards} />)}
      <ActionButton />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { lists: state.lists };
};
export default connect(mapStateToProps)(App);
