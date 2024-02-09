'use client'
import React, {useState} from 'react'
import {TextField, Button, InputLabel, Select, MenuItem} from '@mui/material'

const Register = () => {
  const [vehicleType, setVehicleType] = useState('')
  const [fullName, setFullName] = useState('')
  const [fathersName, setFathersName] = useState('')
  const [age, setAge] = useState(0)
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [phone, setPhone] = useState('')
  const [emergencyNumber, setEmergencyNumber] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    const data = {
      fullName, fathersName, age, address1, address2, phone, emergencyNumber, email, vehicleType
    }
    alert(JSON.stringify(data))
    console.log(data)
  }

  return (
    <div className='min-h-screen min-w-screen bg-blue-200 flex items-center justify-center'>
      <form className='w-auto min-w-96 h-auto p-8 rounded-xl bg-gray-100 gap-4 m-8 flex flex-col items-start justify-center'>
        <h1 className='text-2xl'> Details for registration </h1>
        <TextField id="outlined-basic" value={fullName} onChange={(e)=>setFullName(e.target.value)} className='w-full' label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" value={fathersName} onChange={(e)=>setFathersName(e.target.value)} className='w-full' label="Father's Name" variant="outlined" />
        <TextField id="outlined-basic" value={age} onChange={(e)=>setAge(e.target.value)} className='w-full' label="Age" type='number' variant="outlined" />
        <TextField id="outlined-basic" value={address1} onChange={(e)=>setAddress1(e.target.value)} className='w-full' label="Address Line 1" variant="outlined" />
        <TextField id="outlined-basic" value={address2} onChange={(e)=>setAddress2(e.target.value)} className='w-full' label="Address Line 2" variant="outlined" />
        <TextField id="outlined-basic" value={phone} onChange={(e)=>setPhone(e.target.value)} className='w-full' label="Phone Number" type='phone' variant="outlined" />
        <TextField id="outlined-basic" value={emergencyNumber} onChange={(e)=>setEmergencyNumber(e.target.value)} className='w-full' label="Emergency Phone Number" variant="outlined" />
        <TextField id="outlined-basic" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full' label="Email Address" variant="outlined" />
        <InputLabel id="demo-simple-select-label">Type of License</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vehicleType}
          label="Age"
          onChange={(e)=>setVehicleType(e.target.value)}
        >
          <MenuItem value={'lmv'}>LMV</MenuItem>
          <MenuItem value={'hmv'}>HMV</MenuItem>
          <MenuItem value={'cv'}>Commercial Vehicle</MenuItem>
        </Select>
        
        <Button variant='contained' className='self-center' onClick={handleSubmit}>Proceed</Button>
      </form>
    </div>
  )
}

export default Register
