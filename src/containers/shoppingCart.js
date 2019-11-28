import React, { Component } from "react";
import moment from "moment";
import Form from "../components/Form";
import Table from "../components/table/Table";
import { states } from "../config/initialStates";
import {
  shippingAddressFields,
  billingAddressFields,
  tableHeadings,
  emptyRow
} from "../config/fields";
import jsonData from "../config/form-data.json";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...states.shoppingCart
    };
    console.info("Data from form >>>>>>>>>>> ", this.state);
  }
  /*
   * handleShippingAddressChange: update shipping address.
   */
  handleShippingAddressChange = evt => {
    const shippingAddress = {
      ...this.state.billishippingAddressngAddress,
      [evt.target.name]: evt.target.value
    };
    this.setState({
      shippingAddress
    });
  };
  /*
   * handleBillingAddressChange: update billing address.
   */
  handleBillingAddressChange = evt => {
    const billingAddress = {
      ...this.state.billingAddress,
      [evt.target.name]: evt.target.value
    };
    this.setState({
      billingAddress
    });
  };

  /*
   * handleCartChange: handle data change in cart fields.
   */
  handleCartChange = (evt, id, changTotalAmount) => {
    const cartData = [...this.state.cartData];
    cartData[id][evt.target.name] = evt.target.value;

    if (changTotalAmount) {
      if (cartData[id].totalPrice && cartData[id].unitPrice) {
        cartData[id].totalPrice = (
          parseFloat(cartData[id].qty) * parseFloat(cartData[id].unitPrice)
        ).toString();
      }
    }
    this.setState({
      cartData
    });
  };

  /*
   * addProductToCart: insert new empty row to cart array.
   */
  addProductToCart = () => {
    const cartData = [...this.state.cartData];
    cartData.push({ ...emptyRow });
    this.setState({
      cartData
    });
  };

  /*
   * removeProductFromCart: remove row from the cart array.
   */
  removeProductFromCart = index => {
    const cartData = [...this.state.cartData];
    cartData.splice(index, 1);
    this.setState({
      cartData
    });
  };
  /*
   * saveCartData: print all the data to browsers console.
   */
  saveCartData = () => {
    console.info("Data from form >>>>>>>>>>>>", this.state);
  };
  /*
   * onDateChange: update the state for oredr date and expected delivery date.
   */
  onDateChange = e => {
    this.setState({
      [e.target.name]: moment(e.target.value)
        .format("YYYY-MM-DD")
        .toString()
    });
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      billingAddress: jsonData.billingAddress,
      shippingAddress: jsonData.shippingAddress,
      cartData: jsonData.cartData
    });
  }

  copyBillingAdress = e => {
    if (e.target.checked) {
      this.setState({
        billingAddress: {
          ...this.state.shippingAddress
        }
      });
    } else {
      this.setState({
        billingAddress: { ...states.shoppingCart.billingAddress }
      });
    }
  };

  render() {
    const {
      billingAddress,
      shippingAddress,
      cartData,
      orderDate,
      expectedDelivery
    } = this.state;

    return (
      <div className="main-container">
        <div className="shoppingCart-card">
          <h3 className="section-heading">Address Details</h3>
          <hr/>
          <div className="row">
            {/* shipping address */}
            <div className="col col-md-4 col-lg-4">
              <Form
                heading="Shipping Address"
                formData={shippingAddress}
                handleChange={this.handleShippingAddressChange}
                fields={shippingAddressFields}
              />
              <div className="datePicker">
                <h5 className="form-heading">Oder Date</h5>
                <input
                  type="date"
                  name="orderDate"
                  id="orderDate"
                  value={orderDate}
                  disabled
                  onChange={e => this.onDateChange(e)}
                ></input>
              </div>
            </div>
            {/* billing address */}
            <div className="col col-md-4 col-lg-4">
              <Form
                heading="Billing Address"
                formData={billingAddress}
                handleChange={this.handleBillingAddressChange}
                fields={billingAddressFields}
              />

              <div className="datePicker">
                <h5 className="form-heading">Expected Delivery</h5>
                <input
                  type="date"
                  name="expectedDelivery"
                  id="expectedDelivery"
                  value={expectedDelivery}
                  onChange={e => this.onDateChange(e)}
                ></input>
              </div>
            </div>
          </div>
          <br/>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={this.copyBillingAdress}
            />
            <label className="form-check-label">
              Billing address is same as Shipping address
            </label>
          </div>
        </div>

        {/* shopping cart detail */}
        <div className="shoppingCart-card">
          <h3 className="section-heading ">Cart Details</h3>
          <hr/>
          <Table
            headings={tableHeadings}
            rows={cartData}
            handleChange={this.handleCartChange}
            removeProduct={this.removeProductFromCart}
          />
          <div>
            <button
              className="shoppingCart-add"
              onClick={this.addProductToCart}
            >
              ADD PRODUCT
            </button>

            <button className="shoppingCart-save" onClick={this.saveCartData}>
              SAVE
            </button>
          </div>
        </div>
      </div>
    );
  }
}
