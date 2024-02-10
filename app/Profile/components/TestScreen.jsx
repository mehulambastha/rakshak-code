import React from 'react';
import {Button} from '@mui/material'
import './components.css';
import { useRouter } from 'next/navigation'

const TestScreen = () => {
  const router = useRouter()

  const pushToPlay = () => {
    alert("All the best")
    router.push('/license-test/')
  }
  return (
    <div className='min-h-screen h-auto flex flex-col items-center justify-start bg-slate-100 p-4'>
      <h1 className='p-2 bg-white rounded-lg'>Important Instructions</h1>
      <div className='bg-slate-100 rounded-sm p-8'>
        <ol className='flex flex-col gap-4'>
          <li>Ensure you have a stable internet connection before starting the test.</li>
          <li>Find a quiet and comfortable environment to take the test to minimize distractions.</li>
          <li>Have your identification documents ready for verification purposes.</li>
          <li>Read each question carefully and consider all options before selecting your answer.</li>
          <li>Take your time to answer each question thoughtfully; there is no rush.</li>
          <li>Do not use any external aids or resources while taking the test.</li>
          <li>If you encounter any technical issues during the test, notify the support team immediately.</li>
          <li>You may not go back to previous questions once you have submitted an answer.</li>
          <li>Remember to click the &quot;Submit&quot; button at the end of the test to ensure your responses are recorded.</li>
          <li>Good luck! Take a deep breath, stay calm, and do your best.</li>
        </ol>
      </div>
        <Button variant="contained" onClick={pushToPlay}>Take test</Button>

    </div>
  )
}

export default TestScreen
