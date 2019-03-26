import React from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import FavoriteArtist from './FavoriteArtist';

class Authenticated extends React.Component {
  render() {
    const props = this.props;
    return (
      <div>
        <SearchForm
          submit={props.submit}
          change={props.change}
          searchQuery={props.searchQuery}/>
        <SearchResult
          list={props.searchResults}
          add={props.add}/>
        <FavoriteArtist
          list={props.favoriteArtists}
          remove={props.remove}/>
      </div>
    )
  }
}

export default Authenticated;