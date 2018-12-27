import React, {Component} from 'react';


export class SearchEngine extends Component {
  render() {
      return (
        <form onSubmit={this.props.querySearch}>
          <input type="text" name="search" />
          <button>Search</button>
        </form>
      )
  }
}
export default SearchEngine;