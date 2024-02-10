'use client'
import React, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Profile = () => {
  const [selectedMainContent, setSelectedMainContent] = useState('profile')

  const handleLogOut = () => {
    alert('logged out')
  }

  return (
    <div>
      <Box sx={{flexGrow: 1}} className='h-screen bg-blue-200 min-w-screen p-2'>
        <Grid container spacing={2} className='h-full'>
          <Grid item xs={3}>
            <Item>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-4 m-4 w-full items-center justify-center list-none text-lg h-full'>
                  <button className='p-2 w-10/12' onClick={()=>setSelectedMainContent('profile')}>My Profile</button>
                  <button className='p-2 w-10/12' onClick={()=>setSelectedMainContent('edit')}>Edit information</button>
                  <button className=' p-2 w-10/12' onClick={()=>setSelectedMainContent('test')}>Take License Assessment</button>
                  <button className=' p-2 w-10/12' onClick={()=>setSelectedMainContent('license')}>Print my license</button>
                  <button className=' p-2 w-10/12' onClick={handleLogOut}>Logout</button>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <div className='m-2 bg-green-400 h-full'>
              {
                (()=>{
                  switch (selectedMainContent) {
                    case 'profile':
                      return <MyProfile />
                      break;
                    case 'edit':
                      return <EditProfile />
                      break
                    case 'test':
                      return <TestScreen />
                      break
                    case 'license':
                      return <License />
                    default:
                      break
                  }
                })()
              }
            </div>
          </Grid>
        </Grid> 
      </Box>
    </div>
  )
}

export default Profile
