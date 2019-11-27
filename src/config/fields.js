/*
 * Fields for shipping address form
 * name: id value for field
 * label: Place holder for the field.
 */
export const shippingAddressFields = [
  {
    name: "firstName",
    label: "First Name"
  },
  {
    name: "lastName",
    label: "Last Name"
  },
  {
    name: "addressLine1",
    label: "Address Line 1"
  },
  {
    name: "addressLine2",
    label: "Address Line 2"
  },
  {
    name: "city",
    label: "City"
  },
  {
    name: "state",
    label: "State"
  },
  {
    name: "zipcode",
    label: "Zipcode"
  },
  {
    name: "country",
    label: "Country"
  }
];
/*
 * Fields for billing address form
 * name: id value for field
 * label: Place holder for the field.
 */

export const billingAddressFields = [
  {
    name: "firstName",
    label: "First Name"
  },
  {
    name: "lastName",
    label: "Last Name"
  },
  {
    name: "addressLine1",
    label: "Address Line 1"
  },
  {
    name: "addressLine2",
    label: "Address Line 2"
  },
  {
    name: "city",
    label: "City"
  },
  {
    name: "state",
    label: "State"
  },
  {
    name: "zipcode",
    label: "Zipcode"
  },
  {
    name: "country",
    label: "Country"
  }
];

/*
 * Cart table heading fields
 */

export const tableHeadings = [
  "Product ID",
  "Product Name",
  "QTY",
  "Unit Price",
  "Total Price",
  "Notes",
  "."
];
/*
 * Empty cart object to add new row to cart
 */
export const emptyRow = {
  productId: "",
  productName: "",
  qty: "",
  unitPrice: "",
  totalPrice: "0",
  notes: ""
};
