import { useState } from 'react'
import { LearnComponent } from './components/LearnComponent'
import { LearnJSX } from './components/LearnJSX'
import { LearnProps } from './components/LearnProps'
import { LearnEvent } from './components/LearnEvent'
import { LearnLiftingStateUp } from './components/LearnLiftingStateUp'
import { LearnState } from './components/LearnState'
import { Calculate } from './components/Calculate'
import { LearnUseEffect } from './components/LearnUseEffect'
import { LearnUseMemo } from './components/LearnUseMemo'
import { LearnUseCallback } from './components/LearnUseCallback'
import { LearnCustomHook } from './components/LearnCustomHook'
import { LearnConditionalRender } from './components/LearnConditionalRender'

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
      {/* <LearnState />
      <Calculate/> */}
      {/* <LearnUseEffect/> */}
      {/* <LearnUseMemo/> */}
      {/* <LearnUseCallback/> */}
      {/* <LearnCustomHook/> */}
      {/* <LearnConditionalRender/> */}
    </>
  )
}

export default App
