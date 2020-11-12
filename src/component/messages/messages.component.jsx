import React from 'react'
import Message from '../message/message.component'
import ScrollToBottom from 'react-scroll-to-bottom'
import './messages.styles.css'

const Messages =({messages,name})=>(

          <ScrollToBottom className="messages-container">
      {  
      messages.map((message, i)=> <div  key={i} >
          <Message message={message} name={name}  />
      </div>)
      }
     </ScrollToBottom>

)

export default Messages ;