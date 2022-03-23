import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  render() {
    const renderedSongs = this.props.songs.map((song) => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.selectSong(song);
              }}
              className="ui button primary"
            >
              select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
    return <div className="ui divided list">{renderedSongs}</div>;
  }
}
const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
