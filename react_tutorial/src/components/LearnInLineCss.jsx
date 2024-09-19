import React from 'react'

export const LearnInLineCss = () => {
  const btn1 = {
    'color':'white',
    'backgroundColor':'black'
  }
  return (
    <>
    <p style={{'fontSize':'40px', 'color':'blue'}}>Hello React This Is RK</p>
    <button style={btn1}>Button 1</button>
    <button style={{...btn1,...{'fontSize':'40px'}}}>Button 2</button>
    </>
  )
}
