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
    return (
      <div className="authenticated">
      <nav>
        <ul className="menu">
          <li className="menu-item"><button onClick={this.handleClick.bind(this, "s")}>Search</button></li>
          <li className="menu-item"><button onClick={this.handleClick.bind(this, "f")}>Favorite Artists</button></li>
        </ul>
      </nav>
        {
          this.state.showSearch ?
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
    )
  }
}

export default Authenticated;