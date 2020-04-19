import React, { Component } from 'react';
import '../App.css';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  state = {
    data: this.props.products,
    input: this.props.value,
    filtrada: this.props.filtrada,

  };  
componentDidUpdate(previo) {
  if (this.props.value !== previo.value && this.props.filtrada !== previo.filtrada ) {
this.setState({
  input: this.props.value,
    filtrada: this.props.filtrada
})
  }
}/*  */

  render() {

    const { data, input, filtrada, que } = this.state;
    return (
      <table className="table">
        <thead>
          <tr className="tablehead">
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {filtrada.map((data, i) => {
            return <ProductRow key={i} name={data.name} price={data.price} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
