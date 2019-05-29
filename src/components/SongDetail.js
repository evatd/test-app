import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) return <div>{"Pick a song"}</div>;
  return (
    <div>
      <p>{song.title} </p>
      <p>{song.duration}</p>
    </div>
  );
};

// we want to grab selectedSong state specifically
// refer to combinedReducers for key
// opted for a key called song, local to this comp
const mapStateToProps = state => {
  return { song: state.selectedSong };
};

// here we just wanna access select song data
// whereas in SongList we're dealing with user action
// so we import the AC and call it from the comp/pass it down as a second argument
export default connect(mapStateToProps)(SongDetail);
