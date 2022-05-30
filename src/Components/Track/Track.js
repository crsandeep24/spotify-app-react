import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action" onClick={this.props.onRemove}>-</button>;
    } else {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        <button className="Track-action">{this.renderAction()} </button>
      </div>
    );
  }
}

export default Track;
