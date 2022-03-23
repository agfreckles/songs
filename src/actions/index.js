// Select song action creator....this would be d form for opening a policy
export const selectSong = (song) => {
  return {
    type: "SELECTED_SONG",
    payload: song,
  };
};
