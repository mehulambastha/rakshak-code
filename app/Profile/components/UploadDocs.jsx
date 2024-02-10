'use client'
import React, {useState} from 'react'
import {Divider, Checkbox} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const UploadDocs = () => {
  const [photo, setPhoto] = useState(null);
  const [aadhar, setAadhar] = useState(null);
  const [pan, setPan] = useState(null);

  const clearFile = (file) => {
    if(file=='photo'){
      setPhoto(null)
    } else if(file=='aadhar'){
      setAadhar(null)
    } else if(file=='pan'){
      setPan(null)
    }
  }

  return (
    <div className='bg-gray-100 gap-5 p-5 h-auto flex flex-col items-start justify-start'>
      <span>Upload Passport Size Photo (JPG or PNG)</span>
      <div>
        <label htmlFor='uploadPhoto' className='cursor-pointer inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Upload Photo</label>
        <Checkbox color="success" checked={photo ? 'true' : null} />
        <DeleteIcon color='error' className='translate-y-2' onClick={()=>clearFile('photo')}/>
      </div>
      <input id='uploadPhoto' type='file' accept='.jpg, .png, .jpeg' className="hidden" onChange={(e)=>setPhoto(e.target.files[0])}/>
      <hr className='w-full' />

      <span>Upload Aadhar Card (JPG or PNG)</span>
      <div className=''>
        <label htmlFor='uploadAadhar' className='cursor-pointer inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Upload Photo</label>
        <Checkbox color="success" checked={aadhar ? 'true' : null} />
        <DeleteIcon color='error' className='translate-y-2' onClick={()=>clearFile('aadhar')}/>
      </div>
      <input id='uploadAadhar' type='file' accept='.jpg, .png, .jpeg' className="hidden" onChange={(e)=>setAadhar(e.target.files[0])}/>
      <hr className='w-full' />

      <span>Upload PAN Card (JPG or PNG)</span>
      <div>
        <label htmlFor='uploadPan' className='cursor-pointer inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Upload PAN Card</label>
        <Checkbox color="success" checked={pan ? 'true' : null} />
        <DeleteIcon color='error' className='translate-y-2' onClick={()=>clearFile('pan')}/>
      </div>
      <input id='uploadPan' type='file' accept='.jpg, .png, .jpeg' className="hidden" onChange={(e)=>setPan(e.target.files[0])}/>
    </div>

  )
}

export default UploadDocs
