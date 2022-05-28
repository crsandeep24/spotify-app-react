import React, { Component } from "react";
import Track from "../Track/Track";
import "./TrackList.css";

export class TrackList extends Component {
  render(props) {
    let incomingTrack = this.props.tracks;
    const result = incomingTrack.map((track, i) => {
      return (
        <h2 key={i}>
          Track: {track.name}, Artist Name: {track.artist}, Alubm: {track.album}
        </h2>
      );
    });

    return (
      <div className="TrackList">
        {result}
        <Track onAdd={this.props.onAdd} isRemoval={true}/>
      </div>
    );
  }
}

export default TrackList;
