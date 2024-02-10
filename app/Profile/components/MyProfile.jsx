import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './components.css'
import Divider from '@mui/material/Divider';
import {TextField} from '@mui/material'

const MyProfile = () => {
  return (
    <div className='flex flex-col gap-3 w-full profileBackground' style={{backgroundColor: '#f2f2f2'}}>
      <div className='flex items-center justify-between gap-4 p-8'>
        <div className='flex flex-col gap-2 border-2 border-black'>
          <h1>
            Online Driving Assessment and Licensing System
          </h1>
          <h3>
            firstName lastName
          </h3>
          <h3>some address</h3>
        </div>
        <div>
          <AccountCircleIcon sx={{fontSize: '150px'}} />
        </div>
      </div>
      <Divider variant='middle' />
      <div className='flex flex-col items-start justify-start gap-8 p-8 w-full min-h-screen'>
        <h1>Your Details</h1>
        <TextField
          disabled
          id="outlined-disabled"
          label="Name"
          defaultValue="firstName lastName"
          className='w-1/2'
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Fathers Name"
          defaultValue="firstName lastName"
          className='w-1/2'
        />
        <TextField
          disabled
          className='w-1/2'
          id="outlined-disabled"
          label="Age"
          defaultValue="31"
        />
        <TextField
          disabled
          className='w-1/2'
          id="outlined-disabled"
          label="Phone Number"
          defaultValue="9854323485"
        />
        <TextField
          disabled
          className='w-1/2'
          id="outlined-disabled"
          label="Emergency Phone Number"
          defaultValue="9124158542"
        />
        <TextField
          disabled
          className='w-1/2'
          id="outlined-disabled"
          label="Email"
          defaultValue="sample@email.com"
        />
        <TextField
          disabled
          className='w-1/2'
          id="outlined-disabled"
          label="Address Line 1"
          defaultValue="line1"
        />
        <TextField
          disabled
          className='w-1/2'
          id="outlined-disabled"
          label="Address Line 2"
          defaultValue="line2"
        />
        <TextField
          disabled
          className='w-1/2'
          id="outlined-disabled"
          label="Vehicle Type"
          defaultValue="LMV"
        />
        <TextField
          disabled
          className='w-1/2'
          id="outlined-disabled"
          label="License Number"
          defaultValue="AXJ15672SD"
        />
      </div>
    </div>
  )
}

export default MyProfile
