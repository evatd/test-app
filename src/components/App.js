import React from "react";
import { connect } from "react-redux";

const App = ({ lists }) => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <ul>
        {lists.map((list, id) => (
          <li key={id}>
            <h1>{list.title}</h1>
            <div>Dummy Card</div>
            <input />
          </li>
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
