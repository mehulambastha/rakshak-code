'use client'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Radio from '@mui/material/Radio';
import {Box, Typography} from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CorrectAnswers from './components/CorrectAnswers';


const Test = () => {
  const router = useRouter()

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const tokenInLocalStorage = localStorage.getItem("loginToken")
      
  //     // If user is logged in
  //     if (tokenInLocalStorage) {
  //       try {
  //         const response = await axios.post("http://localhost:5001/play/", {
  //             "token": localStorage.getItem("loginToken")
  //           }, 
  //           {
  //             headers: {
  //               "token": localStorage.getItem("loginToken")
  //             }
  //           }
  //         );

  //         if (response.status === 200){
  //           const questionReturnedFromBackend = response.data.question;
  //           setCurrentQuestion(questionReturnedFromBackend);
  //         } else {
  //           setUserLoggedIn(false)
  //         }
  //       } catch (error) {
  //         console.log("Macho error: ", error);
  //       } 
  //     }else{
  //       setUserLoggedIn(false)
  //     }
  //   }

  //   fetchData()
  // }, []);

  const handleAnswerSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5001/play/submit", {
      "token": localStorage.getItem("loginToken"),
      "userAnswer": userAnswer
    })
    .then((response) => {
        setCurrentQuestion(null)
        if(response.status === 200) {
          alert("Correct Answer!")
          setCurrentQuestion(response.data)
        }else{
          alert("Incorrect! Try again.")
        }
      })  
      .catch((err) => {
        alert("Incorrect! Try again.")
        setUserAnswer("")
      })  
      setUserAnswer("")
    }

  // const handleLogOut = async (e) => {
  //   e.preventDefault()
  //   localStorage.clear("loginToken")
  //   router.push("../")
  // }

  // useEffect(()=> {
  //   if(!userLoggedIn) {
  //       const redirectToLogin = setTimeout(() => {
  //         router.push("../")
  //       }, 3000)        
  //       return () => clearTimeout(redirectToLogin)
  //   }
  // }, [router])

  const questions = [
    {
      "questionNumber": 1,
      "questionBody": "What does a yellow traffic light indicate?",
      "options": [
        {"text": "Slow down and proceed with caution", "optionId": 123456},
        {"text": "Stop if safe to do so", "optionId": 234567},
        {"text": "Speed up to clear the intersection", "optionId": 345678},
        {"text": "Ignore and proceed", "optionId": 456789}
      ],
      "correctOption": 123456
    },
    {
      "questionNumber": 2,
      "questionBody": "What should you do if you see a pedestrian crossing the road?",
      "options": [
        {"text": "Accelerate to cross before the pedestrian", "optionId": 567890},
        {"text": "Sound the horn to alert the pedestrian", "optionId": 678901},
        {"text": "Slow down or stop to allow the pedestrian to cross", "optionId": 789012},
        {"text": "Drive closer to scare the pedestrian away", "optionId": 890123}
      ],
      "correctOption": 789012
    },
    {
      "questionNumber": 3,
      "questionBody": "When should you use your headlights?",
      "options": [
        {"text": "Only during nighttime", "optionId": 901234},
        {"text": "Only during the daytime", "optionId": 122345},
        {"text": "When it's raining or foggy and visibility is reduced", "optionId": 123456},
        {"text": "Never use headlights", "optionId": 234567}
      ],
      "correctOption": 123456
    },
    {
      "questionNumber": 4,
      "questionBody": "What does a double solid yellow line in the middle of the road indicate?",
      "options": [
        {"text": "Passing is allowed", "optionId": 345678},
        {"text": "No passing from either direction", "optionId": 456789},
        {"text": "Passing is allowed only from one direction", "optionId": 567890},
        {"text": "Passing is allowed with caution", "optionId": 678901}
      ],
      "correctOption": 456789
    },
    {
      "questionNumber": 5,
      "questionBody": "What should you do if your vehicle starts to skid?",
      "options": [
        {"text": "Steer in the direction of the skid", "optionId": 789012},
        {"text": "Steer in the opposite direction of the skid", "optionId": 890123},
        {"text": "Apply brakes hard", "optionId": 901234},
        {"text": "Continue steering straight ahead", "optionId": 212345}
      ],
      "correctOption": 789012
    },
    {
      "questionNumber": 6,
      "questionBody": "What is the legal blood alcohol concentration (BAC) limit for drivers in most states?",
      "options": [
        {"text": "0.05%", "optionId": 123456},
        {"text": "0.08%", "optionId": 234567},
        {"text": "0.10%", "optionId": 345678},
        {"text": "0.15%", "optionId": 456789}
      ],
      "correctOption": 234567
    },
    {
      "questionNumber": 7,
      "questionBody": "What should you do when approaching a roundabout?",
      "options": [
        {"text": "Speed up to enter the roundabout quickly", "optionId": 567890},
        {"text": "Yield to traffic already in the roundabout", "optionId": 678901},
        {"text": "Stop and wait for a gap in traffic", "optionId": 789012},
        {"text": "Sound your horn to alert other drivers", "optionId": 890123}
      ],
      "correctOption": 678901
    },
    {
      "questionNumber": 8,
      "questionBody": "What does a solid white line at an intersection indicate?",
      "options": [
        {"text": "Passing is allowed", "optionId": 901234},
        {"text": "No passing", "optionId": 122345},
        {"text": "Passing is allowed with caution", "optionId": 123456},
        {"text": "No stopping", "optionId": 234567}
      ],
      "correctOption": 122345
    },
    {
      "questionNumber": 9,
      "questionBody": "What should you do if you witness a car accident?",
      "options": [
        {"text": "Keep driving and ignore it", "optionId": 345678},
        {"text": "Stop and offer assistance if safe to do so", "optionId": 456789},
        {"text": "Take pictures and post on social media", "optionId": 567890},
        {"text": "Drive around the accident and continue", "optionId": 678901}
      ],
      "correctOption": 456789
    },
    {
      "questionNumber": 10,
      "questionBody": "What is the purpose of traffic signs?",
      "options": [
        {"text": "To decorate the roadside", "optionId": 789012},
        {"text": "To distract drivers", "optionId": 890123},
        {"text": "To provide information and regulate traffic", "optionId": 901234},
        {"text": "To confuse drivers", "optionId": 122345}
      ],
      "correctOption": 901234
    },
    {
      "questionNumber": 11,
      "questionBody": "What should you do if your vehicle's tire blows out while driving?",
      "options": [
        {"text": "Brake suddenly to come to a stop", "optionId": 123456},
        {"text": "Hold the steering wheel firmly and gradually slow down", "optionId": 234567},
        {"text": "Swerve left and right to stabilize the vehicle", "optionId": 345678},
        {"text": "Ignore it and continue driving", "optionId": 456789}
      ],
      "correctOption": 234567
    },
    {
      "questionNumber": 12,
      "questionBody": "When should you use your turn signals?",
      "options": [
        {"text": "Only when other drivers are around", "optionId": 567890},
        {"text": "Only when turning left", "optionId": 678901},
        {"text": "Before changing lanes or turning", "optionId": 789012},
        {"text": "Never use turn signals", "optionId": 890123}
      ],
      "correctOption": 789012
    },
    {
      "questionNumber": 13,
      "questionBody": "What does a flashing red traffic light indicate?",
      "options": [
        {"text": "Stop and proceed when safe", "optionId": 901234},
        {"text": "Slow down and proceed with caution", "optionId": 122345},
        {"text": "Stop and wait for a green light", "optionId": 123456},
        {"text": "Ignore and proceed", "optionId": 234567}
      ],
      "correctOption": 901234
    },
    {
      "questionNumber": 14,
      "questionBody": "What is the minimum safe following distance between your vehicle and the one ahead in ideal driving conditions?",
      "options": [
        {"text": "1 car length", "optionId": 345678},
        {"text": "2 seconds", "optionId": 456789},
        {"text": "5 feet", "optionId": 567890},
        {"text": "10 seconds", "optionId": 678901}
      ],
      "correctOption": 456789
    },
    {
      "questionNumber": 15,
      "questionBody": "What should you do if your vehicle's headlights fail while driving at night?",
      "options": [
        {"text": "Turn on hazard lights and continue driving", "optionId": 789012},
        {"text": "Continue driving without headlights", "optionId": 890123},
        {"text": "Pull over to a safe location and use emergency flashers", "optionId": 901234},
        {"text": "Speed up to reach your destination faster", "optionId": 122345}
      ],
      "correctOption": 901234
    }
  ]

  const [currentLevel, setCurrentLevel] = useState(1)
  const [userAnswerArray, setUserAnswerArray] = useState([])
  const [value, setValue] = React.useState('')
  const handleRadioChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (currentLevel <=15 ) {
      if (value == questions[currentLevel-1].correctOption) {
        setUserAnswerArray(prev=>[...prev, currentLevel])
        setCurrentLevel(prev=>prev+1)
      } else {
        setCurrentLevel(prev=>prev+1)
      }
    }
  }

  const checkScore = () => {
    alert(`Total questions: 15\nYou scored: ${userAnswerArray.length}`)
  }

  return (
      <div>
        <div>
          {
            (currentLevel < 15) ? (
              <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3 }} variant="standard">
                  <FormLabel id="demo-error-radios">{questions[currentLevel-1].questionBody}</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel value={questions[currentLevel-1].options[0].optionId} control={<Radio />} label={questions[currentLevel-1].options[0].text} />
                    <FormControlLabel value={questions[currentLevel-1].options[1].optionId} control={<Radio />} label={questions[currentLevel-1].options[1].text} />
                    <FormControlLabel value={questions[currentLevel-1].options[2].optionId} control={<Radio />} label={questions[currentLevel-1].options[2].text} />
                    <FormControlLabel value={questions[currentLevel-1].options[3].optionId} control={<Radio />} label={questions[currentLevel-1].options[3].text} />
                  </RadioGroup>
                  <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                    Submit
                  </Button>
                  <Button onClick={()=>{
                    setCurrentLevel(15)
                    setUserAnswerArray([1, 3, 4, 6, 12, 13, 7, 9, 14])
                  }}>End test now (dev only)</Button>
                </FormControl>
              </form>
            ) : (
              <div className='w-screen flex flex-col gap-5 p-10 items-start justify-center'>
                  <span className='m-4 block self-center'>Test Complete!</span>
                  <br />
                  <div className='relative self-center'>
                    <CircularProgress value={(userAnswerArray.length*100/15)} variant='determinate' thickness={8} size={'10rem'}/>
                    <Box
                      sx={{
                        top: 0,
                        left: 0, 
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <p>
                        {`${userAnswerArray.length} / 15`}
                      </p>
                    </Box>
                  </div>
                  <h4>The correct answers are here</h4>
                  <CorrectAnswers questions={questions} />
              </div>
            )
          }
        </div>
      </div>
  )
}

export default Test
