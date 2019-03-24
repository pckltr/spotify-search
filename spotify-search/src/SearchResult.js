import React from 'react'

class SearchResult extends React.Component {
  render() {
    const props = this.props;
    return (
      <ul>
        {props.list.map((item, key) => (
          <li key={key}>
            <span>{item.name}</span>
            <button onClick={props.add.bind(this, item.name)}>add to favorites</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default SearchResult;