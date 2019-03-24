import React from 'react'

class FavoriteArtist extends React.Component {
  render() {
    const props = this.props;
    return (
      <ul>
        {props.list.map((name, key) => (
          <li key={key}>
            <span>{name}</span>
            <button onClick={props.remove.bind(this, name)}>remove to favorites</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default FavoriteArtist;