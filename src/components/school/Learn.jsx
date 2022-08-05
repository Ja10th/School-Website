import React from 'react'

const Learn = ({Icon, text, Tm}) => {
  return (
    <div className="Learn__Main">
    {Icon ? <Icon className={Tm}/> : ''}
    <p>{text}
    </p>
</div>
  )
}

export default Learn