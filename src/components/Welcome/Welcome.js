import React from 'react'
import './Welcome.css';
import Button from './Button';

const Welcome = () => {
  return (
    <div className='container'>
        <welcome className ="welcome">
            <hi>Welcome</hi>
            <Button />
        </welcome>
    </div>
  )
}

export default Welcome