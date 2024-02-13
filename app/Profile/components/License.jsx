import React, {useRef, useEffect, useState} from 'react'

const License = () => {
    
  const canvasRef = useRef()

  useEffect(()=>{
    const canvas = canvasRef.current

    const ctx = canvas?.getContext("2d")
    
    if(ctx) {
      ctx.fillStyle = 'red'
      ctx.fillRect(0, 0, 500, 300)
    }
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={300}></canvas>
      AAgya hoga dibba upar
    </div>
  )
}

export default License
