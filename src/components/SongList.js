import React, { Component } from "react";
// to create an instance of connect component
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return this.props.songs.map((song) => <div key={song.title}>{song.title}</div>)
  }
}

// get my state
const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
