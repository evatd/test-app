import React, { Component } from "react";
// to create an instance of connect component
import { connect } from "react-redux";
// importing a plain old JS function,
// it gets called and we return an object
import { selectSong } from "./../actions";
import SongDetail from "./SongDetail";

class SongList extends Component {
  renderList = () =>
    this.props.songs.map(song => (
      <div key={song.title}>
        <p>{song.title}</p>
        {/* call the AC and pass down the song we're currently iterating over */}
        <button onClick={() => this.props.selectSong(song)}>
          {"Select Song"}
        </button>
      </div>
    ));
  render() {
    return (
      <div>
        {this.renderList()}
        <div>
          <SongDetail />
        </div>
      </div>
    );
  }
}

// get my state
const mapStateToProps = state => {
  console.log("state", state);
  return { songs: state.songs };
};

// selectSong: selectSong
// connect will now pass this AC to our comp
// as a prop
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
