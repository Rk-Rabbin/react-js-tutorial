import { useState } from 'react'
import { LearnComponent } from './components/LearnComponent'
import { LearnJSX } from './components/LearnJSX'
import { LearnProps } from './components/LearnProps'
import { LearnEvent } from './components/LearnEvent'
import { LearnLiftingStateUp } from './components/LearnLiftingStateUp'
import { LearnState } from './components/LearnState'

function App() {
  let roll = 11;
  const getData = (data)=>{
    console.log(data);
  }
  return (
    <>
      {/* <LearnComponent />
      <LearnJSX/>
      <LearnProps name="Rayhan Kabir" roll={roll}/>
      <LearnEvent/>
      <LearnLiftingStateUp mydata={getData}/> */}
      <LearnState />
    </>
  )
}

export default App
