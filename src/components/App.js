import React from "react";
import { connect } from "react-redux";

const App = () => {
  return <div style={{ margin: 0, padding: 0 }}>{"hi"}</div>;
};

const mapStateToProps = state => {
  console.log(state)
  return state
}
export default connect(mapStateToProps)(App);
