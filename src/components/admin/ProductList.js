import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProductList() {
    return _.map(this.props.Products, (Product) => {
      return [
        <div key={Product.uid}>
          <hr />
          <p><strong>Service</strong>: {Product.service}</p>
          <p><strong>Price</strong>: {Product.price}</p>
          <p><strong>Note</strong>: {Product.note}</p>
          <hr />
        </div>
      ];
    });
  }

  render() {
    return (
      <div className="widget">
        {this.renderProductList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const Products = _.map(state.Products, (val, uid) => {
    return { ...val, uid };
  });

  return { Products };
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);
