import React from 'react';
import SearchResult from './SearchResult';
import FavoriteArtist from './FavoriteArtist';

class Authenticated extends React.Component {
  render() {
    const props = this.props;
    return (
        <div>
            <form onSubmit={props.submit.bind(this)}>
                <input type="text" value={props.searchQuery} onChange={props.change}/>
                <input type="submit" value={"Search for " + (props.searchQuery ? props.searchQuery : "an artist")}/>
            </form>
            <SearchResult list={props.searchResults} add={props.add}/>
            <FavoriteArtist list={props.favoriteArtists} remove={props.remove}/>
        </div>
    )
  }
}

export default Authenticated;