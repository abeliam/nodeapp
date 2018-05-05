import React from "react"

const InputField = ({ input: { value, onChange }, meta: {error, invalid}, label, type, required, placeholder }) => (
  <div className={`${required ? "required" : ""} ${invalid ? "errored" : ""} field`}>
    <label htmlFor="username">{label}</label>
    <input type={type} name="username" value={value} onChange={e => onChange(e)} placeholder={placeholder}/>
    <p className="meta">{error}</p>
  </div>
)

export default InputField
