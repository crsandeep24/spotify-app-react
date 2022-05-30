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
        { name: "Tum hi ho", artist: "Arman", album: "Aashiqui 2", id: 1 },
        {
          name: "Kariye Kuch kariye",
          artist: "AR Rehman",
          album: "Chack de India",
          id: 2,
        },
        {
          name: "Dangal Dangal",
          artist: "Shreya Ghoshal",
          album: "Dangal",
          id: 3,
        },
      ],
      playlistName: "Sandeep",
      playlistTracks: [
        {
          name: "Playlist 1",
          artist: "Anirudh Ravichander",
          album: "Jalsa",
          id: 1,
        },
        {
          name: "Playlist 2",
          artist: "DSP",
          album: "Lakshmi",
          id: 1,
        },
        {
          name: "Playlist 3",
          artist: "Anoop Rubents",
          album: "Mukunda",
          id: 1,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id)
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
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
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
