import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: 'ttesss' };
  }

  handleChange = evt => {
    this.setState({ search: evt.target.value });
    this.props.onSearchChange("lel")
  }

  render() {
    return <div id="search-bar">
        <form>
          <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search..."/>
        </form>
      </div>;
  }
}

export default SearchBar;