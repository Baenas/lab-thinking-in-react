import React, { Component } from 'react';
import '../App.css';
import ProductTable from './ProductTable';

class SearchBar extends Component {
  state = {
    data: this.props.products,
    datos: '',
    isChecked: true,
  };

  handleChange = (e) => {
    this.props.updateState(e);

    this.setState({
      datos: e.target.value,
    });
  };

  Change = () => {
     
    this.setState({
      isChecked: !this.state.isChecked,
    });

     this.props.checkbox(this.state.isChecked);
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

        <div>
          {' '}
          <input
            checked={this.state.isChecked}
            onChange={this.Change}
            type="checkbox"
            id="stok"
            name="vehicle1"
          />{' '}
          <label>Only show products in stock </label>
          <br></br>
        </div>
      </div>
    );
  }
}

export default SearchBar;
