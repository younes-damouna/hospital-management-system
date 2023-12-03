import React, { useState } from "react";
import "./index.css";
const AlertMessage = ({ message, type, showing }) => {
  const [show, SetShow] = useState(showing);
  return (
    <>
      {show ? (
        <div
          className={`   alert row  space-between ${type} ${
            show ? "d-flex" : "d-none"
          }`}
        >
         
          <div>{message}</div>
          <div
            onClick={() => {
              SetShow(false);
            }}
          >
            close
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AlertMessage;
