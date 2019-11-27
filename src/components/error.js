import React from "react";
import { validator } from "../../src/utils/validator";
const Validation = props => {
  const { field, value } = props;
  const validCheck = validator(field, value);
  return !validCheck.isValid ? (
    <small className="shoppingCart-error">{validCheck.msg}</small>
  ) : null;
};

export default Validation;
