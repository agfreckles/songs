import { combineReducers } from "redux";
const songsReducer = () => [
  { title: "All my life", duration: "17:40", artist: "KCI & Jojo" },
  { title: "On Bended Knees", duration: "02:23", artist: "Boyz II Men" },
  { title: "Knock u down", duration: "06:99", artist: "Keri Hilson" },
  { title: "End of the road", duration: "05:21", artist: "Boyz II Men" },
];

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})