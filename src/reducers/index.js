import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Diamonds", duration: "4:05" },
    { title: "Macarena", duration: "2:35" },
    { title: "All Star", duration: "3:35" },
    { title: "I Want It That Way", duration: "1:45" }
  ];
};

// first argument is null as when the app firsts starts, there's no selected song
// so not undefined
// second argument = action object
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

// to give access to our combined set of reducers
// add keys
export default combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer });
