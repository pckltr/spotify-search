import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';
import Login from './Login';
import Authenticated from './Authenticated';

const spotifyWebApi = new Spotify();
class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: (params.access_token ? true : false),
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
    while ( (e = r.exec(q)) ) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  handleQueryChange = (event) => {
    this.setState({searchQuery: event.target.value});
  }

  isFavorite = (item) => {
    const list = this.state.favoriteArtists;
    console.log(list, item, (list.indexOf(item) !== -1));
    return (list.indexOf(item) !== -1);
  }

  addToFavorites = (item) => {
    const list = this.state.favoriteArtists;
    if(this.isFavorite(item) === false) {
      this.setState({favoriteArtists: [...list, item]});
    }
  }

  removeFromFavorites = (item) => {
    const list = this.state.favoriteArtists;
    if(this.isFavorite(item) === false) {
      list.splice(list.indexOf(item), 1);
      this.setState({favoriteArtists: [...list]});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    spotifyWebApi.search(this.state.searchQuery, ['artist'])
      .then((response) => {
        this.setState({
          searchResults: response.artists.items
        })
      })
  }

  render() {
    const state = this.state;
    return (
      <div className="App">
        {
          !state.loggedIn ?
          <Login /> :
          <Authenticated
            searchQuery={state.searchQuery}
            searchResults={state.searchResults}
            favoriteArtists={state.favoriteArtists}
            submit={this.handleSubmit}
            change={this.handleQueryChange} 
            add={this.addToFavorites}
            remove={this.removeFromFavorites}
            isFavorite={this.isFavorite}
          />
        }
      </div>
    );
  }
}

export default App;