import React from 'react'
import './about.css'

const Abtt = ({Icon, text, Tm}) => {
  return (
    <div className="M-tm">

      {Icon ? <Icon className={Tm}/> : ''}
        <p>{text}</p>
        
    </div>
  )
}

export default Abtt