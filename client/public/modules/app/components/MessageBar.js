import React from "react"
import { Link } from "react-router-dom"

const MessageBar = ({message, closeMessage}) => (
  <div id="messageBar" className={`container ${message ? "" : "hidden"}`}>
    <p>{message}</p>
    <a href="#" className="close" onClick={closeMessage}>⨯</a>
  </div>
)

export default MessageBar
