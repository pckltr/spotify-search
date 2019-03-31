import React from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import FavoriteArtist from './FavoriteArtist';

class Authenticated extends React.Component {
  constructor() {
    super();
    this.state = {
      showSearch: true
    }
  }
  handleClick = function(page) {
    switch(true) {
      case page === "s":
        this.setState({showSearch: true});
        break;
        
      case page === "f":
        this.setState({showSearch: false});
        break;

      default: 
        this.setState({showSearch: true});
        break;
    }
  }
  render() {
    const props = this.props;
    const state = this.state;
    return (
      <div className="authenticated">
        <nav className="navigation">
          <ul className="menu">
            <li className={"menu-item" + (state.showSearch ? " selected" : "")}>
              <button className="menu-button" onClick={this.handleClick.bind(this, "s")}>Search</button>
            </li>
            <li className={"menu-item" + (state.showSearch ? "" : " selected")}>
              <button className="menu-button" onClick={this.handleClick.bind(this, "f")}>Favorites</button>
            </li>
          </ul>
        </nav>
        <div className="main-content">
          {
            state.showSearch ?
              <div className="search-page">
                <SearchForm
                  submit={props.submit}
                  change={props.change}
                  searchQuery={props.searchQuery}/>
                  
                {props.searchResults.length > 0 ? 
                  <SearchResult
                    list={props.searchResults}
                    add={props.add}/> : null}
              </div>
            :

            <FavoriteArtist
              list={props.favoriteArtists}
              remove={props.remove}/>
          }
        </div>
      </div>
    )
  }
}

export default Authenticated;