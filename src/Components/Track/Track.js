import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
       <button>-</button>;
    } else {
      <button>+</button>;
    }
  }

  render(props) {
  console.log(this.props);

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>track name will go here</h3>
          <p>track artist will go here track album will go here </p>
        </div>
        <button className="Track-action">{this.renderAction} </button>
      </div>
    );
  }
}

export default Track;
