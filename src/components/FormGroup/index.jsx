import React from "react";
import "./index.css";
const FormGroup = ({ label, placeholder, className, type,required,onChange,name,value }) => {
  return (
    <div className="form-group d-flex column">
      <label htmlFor="email text-white ">{label}</label>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        id={label}
        name={name}
        required={required}
        value={value}
        onChange={(e)=>onChange(name,e.target.value)}
      />
    </div>
  );
};

export default FormGroup;
