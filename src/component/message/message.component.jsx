import React from 'react'

import './message.styles.css'

const Message =({message: {user, text }, name})=>{

let isSentCurrebtUser = false
const trimmedName = name.trim().toLowerCase()


if (user === trimmedName){
    isSentCurrebtUser = true
} 

return (
    <div>
    {
    isSentCurrebtUser ?
    (
        <div className="message-container justifyEnd">
            <p className="textSent pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{text}</p>
            </div>
        </div>
    )
    
    : (
        <div className="message-container justifyStart">
            <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{text}</p>
            </div>
            <p className="textSent pl-10">{user}</p>
        </div>
    )
    }
    </div>
)}

export default Message