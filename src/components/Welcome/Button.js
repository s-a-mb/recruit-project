import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => {navigate("/register")}} className='btn'>
          Register
        </button>
        <button onClick={() => {navigate("/login")}} className='btn'>
          Log In
        </button>
      </div>
    </>
  )
}

export default Button