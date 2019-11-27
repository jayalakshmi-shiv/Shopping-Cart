const validationMessage = { isValid: true, message: "" };
/*
 * validator: will validate values with respect to its field, accepts 2 parameter(`field` and `value`)
 * return object with properties `isValid` and `message`
 * isValid : Boolean - true for valid fields and false for invalid fields
 * message : string - Error message for invalid fields.
 */
export const validator = (field, value) => {
  if (field === "productId") {
    if (!value) {
      return {
        isValid: false,
        message: "Field can not be empty"
      };
    }
    if (!value.match(/^[0-9]*$/g)) {
      return {
        isValid: false,
        message: "Enter only digits"
      };
    }
    if (!value.match(/\b\d{5,}\b/g)) {
      return {
        isValid: false,
        message: "Enter minimum 5 digits"
      };
    }
    if (!value.match(/\b\d{5,10}\b/g)) {
      return {
        isValid: false,
        message: "Enter maximum 10 digits"
      };
    } else {
      return validationMessage;
    }
  } else if (field === "productName") {
    if (!value) {
      return {
        isValid: false,
        message: "Name can not be empty"
      };
    }
    if (value.length > 15) {
      return {
        isValid: false,
        message: "Name must be max. 15 characters"
      };
    }
    return validationMessage;
  } else if (field === "qty") {
    if (!value) {
      return {
        isValid: false,
        message: "Field can not be empty"
      };
    }
    if (!value.match(/^[0-9]*$/)) {
      return {
        isValid: false,
        message: "Enter only digits"
      };
    } else {
      return validationMessage;
    }
  } else if (field === "unitPrice") {
    if (!value) {
      return {
        isValid: false,
        message: "Field can not be empty"
      };
    }
    if (!value.match(/^[+-]?\d+(\.\d*)?$/)) {
      return {
        isValid: false,
        message: "Enter only digits"
      };
    } else {
      return validationMessage;
    }
  }
};
