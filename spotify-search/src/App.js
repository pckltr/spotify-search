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
      searchResults: [],
      favoriteArtists: []
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

  addToFavorites = (item) => {
    var list = this.state.favoriteArtists;
    if(list.indexOf(item) === -1) {
      this.setState({favoriteArtists: [...list, item]});
    }
  }

  removeFromFavorites = (item) => {
    var list = this.state.favoriteArtists;
    if(list.indexOf(item) !== -1) {
      list.splice(list.indexOf(item), 1);
      this.setState({favoriteArtists: [...list]});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('asd');
  }

  render() {
    return (
      <div className="App">
        <a href="http://localhost:8888">
          <button>login</button>
        </a>
        <div><form onSubmit={this.handleSubmit.bind(this)}><input type="text" value={this.state.searchQuery} onChange={this.handleQueryChange}/><input type="submit" value={"Search for " + (this.state.searchQuery ? this.state.searchQuery : "an artist")} onClick={this.handleSearch}/></form></div>
        <div>{this.state.searchResults.map((item, key) => (<div key={key}>{item.name} <button onClick={this.addToFavorites.bind(this, item.name)}>add to favorites</button></div>))}</div>
        <hr />
        <div>{this.state.favoriteArtists.map((item, key) => <div key={key}>{item}<button onClick={this.removeFromFavorites.bind(this, item)}>remove to favorites</button></div>)}</div>
      </div>
    );
  }
}

export default App;