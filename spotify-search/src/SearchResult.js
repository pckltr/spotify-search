import React from 'react';
import './SearchResult.css';

class SearchResult extends React.Component {
  render() {
    const props = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Artist's name</th>
            <th>Followers</th>
            <th>Popularity</th>
            <th>Add to favorites</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item, key) => (
            <tr key={key}>
              <td className="artist-cell"><a target="_blank" rel="noopener noreferrer" className="table-link" href={item.external_urls.spotify}>{item.name}</a></td>
              <td>{item.followers.total}</td>
              <td>{item.popularity}</td>
              <td><button onClick={props.add.bind(this, item.name)}>add to favorites</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default SearchResult;