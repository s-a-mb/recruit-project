import React from 'react'
import './Welcome.css';
import Button from './Button';

const Header = () => {
  return (
    <div className='container'>
        <header className ="header">
            Welcome
            <Button />
        </header>
    </div>
  )
}

export default Header