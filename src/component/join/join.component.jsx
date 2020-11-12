import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import './join.css'
const Join = ()=>{
    
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    return(

 <div className='Join_con'>
 <div className='Container'>
<div className='Heading'>
Join
</div>
<input className='joinInput mt' type="text"  placeholder='name' 
onChange= {(event)=>setName(event.target.value)} />

<input className='joinInput mt' type="text"  placeholder='room' 
onChange= {(event)=>setRoom(event.target.value)} />


<Link className='Join_link'  to={`/chat?name=${name}&room=${room}`} onClick={ event=> (!name || !room) ? event.preventDefault() : null } >
<button className='Btn'>sign up</button>
</Link>

 </div>
</div>


    )
}

export default Join;