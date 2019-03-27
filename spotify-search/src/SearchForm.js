import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
  render() {
    const props = this.props;
    return (
      <form className="search-form" onSubmit={props.submit.bind(this)}>
        <input className="search-input" type="text" value={props.searchQuery} onChange={props.change}/>
        <input className="search-button" type="submit" value={"Search for " + (props.searchQuery ? props.searchQuery : "an artist")}/>
      </form>
    )
  }
}

export default SearchForm;