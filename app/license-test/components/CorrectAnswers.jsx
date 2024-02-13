import React from 'react'
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material'

const CorrectAnswers = ({questions}) => {

  const disabledFormElements = []

  for (const question of questions) {
    disabledFormElements.push(
                <FormControl sx={{ m: 3 }}>
                  <FormLabel>
                    <span className='text-black text-lg'>{question.questionBody}</span>
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={question.correctOption}
                  >
                    <FormControlLabel value={question.options[0].optionId} control={(question.options[0].optionId == question.correctOption) ? <Radio /> : <Radio disabled />} label={question.options[0].text} />
                    <FormControlLabel value={question.options[1].optionId} control={(question.options[1].optionId == question.correctOption) ? <Radio /> : <Radio disabled />} label={question.options[1].text} />
                    <FormControlLabel value={question.options[2].optionId} control={(question.options[2].optionId == question.correctOption) ? <Radio /> : <Radio disabled />} label={question.options[2].text} />
                    <FormControlLabel value={question.options[3].optionId} control={(question.options[3].optionId == question.correctOption) ? <Radio /> : <Radio disabled />} label={question.options[3].text} />
                  </RadioGroup>
                </FormControl>      
    )
  }

  return (
    <div className='flex flex-col gap-3 w-full items-start justify-start p-4'>
      {disabledFormElements}  
    </div>
  )
}

export default CorrectAnswers
