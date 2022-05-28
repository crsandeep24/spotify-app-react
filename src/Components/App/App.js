import React, { Component } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "Tum hi ho", artist: "Arman", album: "Aashiqui 2" },
      ],
      playlistName: "Sandeep",
      playlistTracks: [
        {
          name: "Chalore chalore",
          artist: "Anirudh Ravichander",
          album: "Jalsa",
          id: 1,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (!track.id === this.state.playlistTracks.id) {
      let newTrack = this.state.playlistTracks.concat(track);
      this.setState({ playlistTracks: newTrack });
    }
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
