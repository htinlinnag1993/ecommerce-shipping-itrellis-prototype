// ProductList is a component that pulls in and displays all the products from our MongoDB database

//
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  // sortByLatestOrEarliest(type) {
  //   switch (type) {
  //     case "latest":
  //       return this.props.products.reverse();
  //     case "earliest":
  //       return this.props.products;
  //     default:
  //       return this.props.products.reverse();
  //   }
  // }

  calculateLatestShipping(maxDays, shipOnWeekends) {
    const today = new Date();

    var latestShipDate = new Date();
    latestShipDate.setDate(today.getDate());

    var nextDay = new Date();
    nextDay.setDate(today.getDate());

    var count = maxDays;

    if (!shipOnWeekends) {
      while(count > 0) {
        if (nextDay.getDay() === 6 || nextDay.getDay() === 0) {
          // console.log(nextDay + " is weekend");
          nextDay.setDate(nextDay.getDate() + 1);   // increment nextDate
        } else {
          // console.log(nextDay + " is not weekend");
          count--;
          nextDay.setDate(nextDay.getDate() + 1);   // increment nextDate
        }
      }
      latestShipDate.setDate(nextDay.getDate() - 1);

    } else {
      latestShipDate.setDate(today.getDate() + maxDays - 1);
    }

    return latestShipDate;
  }

  renderProducts() {
    // return this.sortByLatestOrEarliest("latest").map(product => {
    // return this.props.products.reverse().map(product => {
    return this.props.products.map(product => {
      return (
        <div className="row" key={product._id}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                {product.productName}
              </span>
              <ul>
                <li className="">Product Name: {product.productName}</li>
                <li className="">Product ID: {product.productId}</li>
                <li className="">Available Inventory Quantity: {product.inventoryQuantity}</li>
                <li className="">{product.shipOnWeekends ? "Shipping this on weekends is available" : "Shipping this on weekends is not available"}</li>
              </ul>
            </div>
            <div className="card-action">
              <a href="#">This item will get shipped latest by: {this.calculateLatestShipping(product.maxBusinessDaysToShip, product.shipOnWeekends).toLocaleDateString()}</a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderProducts()}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { products: state.products };
// }
function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps,{ fetchProducts })(ProductList);
