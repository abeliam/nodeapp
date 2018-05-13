import React from "react"
import { Link } from "react-router-dom"

const Message = ({text, className, closeMessage}) => (
  <div className={`message ${className}`}>
    <p>{text}</p>
    <a href="#" className="close" onClick={closeMessage}>⨯</a>
  </div>
)

const Messages = ({messages, closeMessage}) => {
  let key = 0
  return (
    <div id="messages">
      {messages.map(message => <Message key={key++} text={message.text} className={message.className} closeMessage={()=>closeMessage(key-1)}/>)}
    </div>
  )
}

export default Messages
