import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();
class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      searchQuery: '',
      searchResults: []
    }
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }
  }
  
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  handleSearch = () => {
    spotifyWebApi.search(this.state.searchQuery, ['artist'])
      .then((response) => {
        this.setState({
          searchResults: response.artists.items
        })
      })
  }

  handleQueryChange = (event) => {
    this.setState({searchQuery: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <a href="http://localhost:8888">
          <button>login</button>
        </a>
        <div><input type="text" value={this.state.searchQuery} onChange={this.handleQueryChange}/><input type="button" value={"Search for " + (this.state.searchQuery ? this.state.searchQuery : "an artist")} onClick={this.handleSearch}/></div>
        <div>{this.state.searchResults.map((item, key) => <div>{item.name}</div>)}</div> 
      </div>
    );
  }
}

export default App;