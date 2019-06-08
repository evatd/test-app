import React from "react";
import { connect } from "react-redux";

const App = props => {
  console.log(props.lists);
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <ul>
        {props.lists.map((list, id) => (
          <li key={id}>{list.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { lists: state.lists };
};
export default connect(mapStateToProps)(App);
