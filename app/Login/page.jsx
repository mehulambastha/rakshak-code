'use client'
import React, {useState} from 'react'
import {TextField, Button} from '@mui/material'
import Navbar from '../components/Navbar.jsx'

const Login = () => {
  const [otpSent, setOtpSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("CHUP")
  }

  const sendMail = () => {
    alert("MAIL")
    setOtpSent(true)
  }

  return (
    <div className='min-h-screen min-w-screen bg-blue-100 flex items-center justify-center'>
      <div className='w-auto h-auto p-10 rounded-lg bg-gray-100 gap-4 flex flex-col items-center justify-center'>
        <h1 className='text-2xl'>Login</h1>
        <TextField id="outlined-basic" label="License Number" variant="outlined" />
        {  
          !otpSent ? (
            <Button variant="outlined" color="success" onClick={sendMail}>
              Get OTP
            </Button>
          ) : (
            <>
              <TextField id="outlined-basic" label="OTP" variant="outlined" />
              <span className='text-blue-500 underline cursor-pointer' onClick={sendMail}>Resend OTP</span>
              <Button variant="contained">Login</Button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Login
