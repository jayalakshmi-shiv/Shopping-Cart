import moment from "moment";
/*
 * Initial component states.
 */
export const states = {
  shoppingCart: {
    billingAddress: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipcode: "",
      country: ""
    },
    shippingAddress: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipcode: "",
      country: ""
    },
    cartData: [],
    orderDate: moment().format("YYYY-MM-DD").toString(),
    expectedDelivery: new Date()
  }
};
