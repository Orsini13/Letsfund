'use client'
import React from 'react'
import './pagee.css'


const Page = ({owner, title, description, target, deadline, amountCollected, image, handleClick}) => {
    const remainingDays = daysLeft(deadline);

  return (
    <div className='first' onClick={handleClick}>
        <Image src={image} alt="fund" className="Image" />
        <div className='second'>

        </div>
    </div>
  )
}

export default profile