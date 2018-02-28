import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { fetchProducts, deleteProduct, fetchProduct } from '../../actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  onDeleteClick(Product) {
    this.props.deleteProduct(Product);
  }

  onEditClick(Product) {
    this.props.fetchProduct(Product);
    window.scrollTo(0,400);
  }

  renderProductList() {
    return _.map(this.props.Products, (Product) => {
      return [
        <div key={Product.uid}>
          <hr />
          <Button
            size="small"
            compact
            basic
            content="Edit"
            onClick={this.onEditClick.bind(this, Product)}
            color="orange"
            className="admin-button"
          />
          <Button 
            size="small"
            compact
            basic
            content="Delete" 
            onClick={this.onDeleteClick.bind(this, Product)}
            color="red"
            className="admin-button"
          />
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

export default connect(mapStateToProps, { fetchProducts, deleteProduct, fetchProduct })(ProductList);
