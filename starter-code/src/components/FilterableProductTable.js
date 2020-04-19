import React, { Component } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
class FilterableProductTable extends Component {
  state = {
    data: this.props.products,
    input: '',
    filtrada: '',
    check: ''
  };

  componentWillMount() {
    this.setState({
      data: this.props.products,
    filtrada: this.state.data.data,
    check: true
    });
  }
  updateState = (e) => {
    this.setState({
      input: e.target.value,
    });
    if (this.state.input === '') {
      this.setState({
        filtrada: this.state.data.data,
      });
    } else {
      const arr = this.props.products.data.filter((name) => {
        return (
          name.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        );
      });

      this.setState({
        filtrada: [...arr],
      });
    }
  };

estado = (statu) =>{
console.log(statu)
   if (this.state.input === '' && statu === true) {
      const arr = this.props.products.data.filter((name) => {
        return (
          name.name.toLowerCase().indexOf(this.state.input.toLowerCase() && name.stocked === true ) !== -1
        );
      });

      this.setState({
        filtrada: [...arr],
      });
    }


}
  render() {
    const { data, input, filtrada } = this.state;

    return (
      <div>
        <h2>Iron Store</h2>
        <div>
          <SearchBar checkbox={this.estado} updateState={this.updateState} />
        </div>
        <div>
          <ProductTable  filtrada={filtrada} value={input} products={data} />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
