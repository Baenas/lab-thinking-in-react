import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    return (
      <tr className="tableelement">
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow