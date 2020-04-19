import React, { Component } from 'react';
import '../App.css';
import ProductTable from './ProductTable';

class SearchBar extends Component {
  state = {
    data: this.props.products,
    datos : ""
  };

  handleChange = (e) => {
    this.props.updateState(e);


    this.setState({
      datos: e.target.value,
    });
  };
  render() {
    const { datos } = this.state;
    return (
      <div>
        <h3>Search</h3>
        <input
          onChange={this.handleChange}
          value={datos}
          className="input"
          type="text"
        ></input>
      </div>
    );
  }
}

export default SearchBar;
