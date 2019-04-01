import React from 'react';

class FavoriteArtist extends React.Component {
  render() {
    const props = this.props;
    return (      
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Artist's name</th>
              <th>Remove from favorites</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((name, key) => (
              <tr key={key}>
                <td className="artist-cell">{name}</td>
                <td>
                  <button onClick={props.remove.bind(this, name)}>remove to favorites</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default FavoriteArtist;