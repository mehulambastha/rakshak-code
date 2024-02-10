'use client'
import React, {useState} from 'react'
import {TextField, Button, Select, MenuItem} from '@mui/material'

const EditProfile = () => {
  const [vehicleType, setVehicleType] = useState('')
  const [fullName, setFullName] = useState('')
  const [age, setAge] = useState(0)
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [phone, setPhone] = useState('')
  const [emergencyNumber, setEmergencyNumber] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    const data = {vehicleType, fullName, age, address1, address2, phone, emergencyNumber, email}
    alert(JSON.stringify(data))
  }

  return (
    <div className=' bg-gray-100'>
      <div className='flex flex-col items-start justify-start gap-8 p-8 w-full min-h-screen'>
        <h1>Edit Your Details</h1>
        <TextField
          id="outlined-disabled"
          label="Name"
          defaultValue="firstName lastName"
          className='w-1/2'        
          onChange={(e)=>setFullName(e.target.value)}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Fathers Name"
          defaultValue="firstName lastName"
          className='w-1/2'     
        />
        <TextField
          className='w-1/2'
          onChange={(e)=>setAge(e.target.value)}          
          id="outlined-disabled"
          label="Age"
          defaultValue="31"
        />
        <TextField
          className='w-1/2'
          onChange={(e)=>setAddress1(e.target.value)}          
          id="outlined-disabled"
          label="Address Line 1"
          defaultValue="line1"
        />
        <TextField
          className='w-1/2'
          onChange={(e)=>setAddress2(e.target.value)}          
          id="outlined-disabled"
          label="Address Line 2"
          defaultValue="line2"
        />
        <TextField
          className='w-1/2'
          onChange={(e)=>setPhone(e.target.value)}          
          id="outlined-disabled"
          label="Phone Number"
          defaultValue="9839974523"
        />
        <TextField
          className='w-1/2'
          onChange={(e)=>setEmergencyNumber(e.target.value)}          
          id="outlined-disabled"
          
          label="Emergency Phone Number"
          defaultValue="9839974523"
        />
        <TextField
          className='w-1/2'
          onChange={(e)=>setEmail(e.target.value)}          
          id="outlined-disabled"
          label="Email"
          defaultValue="sample@email.com"
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'LMV'}
          label="Age"
          onChange={(e)=>setVehicleType(e.target.value)}
        >
          <MenuItem value={'lmv'}>LMV</MenuItem>
          <MenuItem value={'hmv'}>HMV</MenuItem>
          <MenuItem value={'cv'}>Commercial Vehicle</MenuItem>
        </Select>
        <Button variant='contained' color='success' onClick={handleSubmit}>Update</Button>
      </div>
    </div>
  )
}

export default EditProfile
