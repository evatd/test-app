// return an action object, type is required, payload optional
// named export = as exporting many diff functions ftom the file
const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};

export { selectSong };
