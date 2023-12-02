import React from 'react'
 import "./index.css"
const Button = ({text, className}) => {
  return (
    <div className={`${className} rounded-1 fs-md`}>{text}</div>
  )
}

export default Button