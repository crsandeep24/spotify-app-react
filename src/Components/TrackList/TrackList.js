import React, { Component } from "react";
import Track from "../Track/Track";
import "./TrackList.css";

export class TrackList extends Component {
  render(props) {
    let incomingTrack = this.props.tracks;

    return (
      <div className="TrackList">
        {incomingTrack.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              isRemoval={this.props.isRemoval}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
