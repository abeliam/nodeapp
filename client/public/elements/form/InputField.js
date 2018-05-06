import React from "react"

const InputField = ({ input: { value, onChange, name }, meta: {error, invalid}, label, type, required, placeholder }) => (
  <div className={`${required ? "required" : ""} ${invalid ? "errored" : ""} field`}>
    <label htmlFor={name}>{label}</label>
    <input type={type} id={name} name={name} value={value} onChange={e => onChange(e)} placeholder={placeholder}/>
    <p className="meta">{error}</p>
  </div>
)

export default InputField
