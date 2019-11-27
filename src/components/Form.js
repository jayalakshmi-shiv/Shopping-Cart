import React from "react";

const Form = props => {
  const { formData, handleChange, heading, fields } = props;
  return (
    <div className="shoppingCart-form">
      {heading && <h4 className="form-heading">{heading}</h4>}
      <form>
        {
          fields && fields.length > 0 &&
          (fields.map((field, index) => (
            <input
              key={index}
              type="text"
              id={field.name}
              name={field.name}
              placeholder={field.label}
              value={formData[field.name]}
              onChange={evt => { handleChange(evt) }}
            />
          )))
        }
      </form>

    </div>
  );
};

export default Form;
