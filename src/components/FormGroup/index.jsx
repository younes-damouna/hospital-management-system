import React from "react";
import "./index.css";
const FormGroup = ({ label, placeholder, className, type,required }) => {
  return (
    <div className="form-group d-flex column">
      <label htmlFor="email text-white ">{label}</label>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        id={label}
        name={label}
        required={required}
      />
    </div>
  );
};

export default FormGroup;
