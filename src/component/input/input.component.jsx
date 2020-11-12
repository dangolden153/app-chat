import React from 'react'

import './input.styles.css'





const Input =({sendMessage, message, setmessage})=>{

    return(
        <form  className="form">
            <input 
            className='input'
            type="text"
            placeholder='type a message'
            value={message}
            onChange={event=> setmessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
            />
            <button className="btn" onClick={event => sendMessage(event)} >send</button>
        </form>
    )
}

export default Input