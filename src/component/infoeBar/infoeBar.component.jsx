import React from 'react'
import icon from '../picture/close.svg'
import './infoeBar.styles.css'

const InfoBar =({room})=>(
    <div className="info-bar">
        <div className="left-con">
            <img src={icon} alt="online icon" className='online-icon'/>
            <h3>{room}</h3>
        </div>
        <div className="right-con">
            <a href="/"> <img src={icon} alt="close img" className='online-icon' /> </a>
        </div>

    </div>
)

export default InfoBar;