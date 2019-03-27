import React from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import FavoriteArtist from './FavoriteArtist';

class Authenticated extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="authenticated">
        <SearchForm
          submit={props.submit}
          change={props.change}
          searchQuery={props.searchQuery}/>
          
        {props.searchResults.length > 0 ? 
          <SearchResult
            list={props.searchResults}
            add={props.add}/> : null}

        <FavoriteArtist
          list={props.favoriteArtists}
          remove={props.remove}/>
      </div>
    )
  }
}

export default Authenticated;