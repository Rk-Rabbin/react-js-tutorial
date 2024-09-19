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
import { LearnMap } from './components/LearnMap'
import { LearnInLineCss } from './components/LearnInLineCss'
import { LearnExternalCss1 } from './components/LearnExternalCss1'
import { LearnExternalCss2 } from './components/LearnExternalCss2'
import { LearnCssModule1 } from './components/LearnCssModule1'
import { LearnCssModule2 } from './components/LearnCssModule2'
import { LearnUageOfImage } from './components/LearnUageOfImage'
import { LearnFormHandler } from './components/LearnFormHandler'
import { LearnUsingEnv } from './components/LearnUsingEnv'

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
      {/* <LearnMap/> */}
      {/* <LearnInLineCss/> */}
      {/* <LearnExternalCss1/>
      <LearnExternalCss2/> */}
      {/* <LearnCssModule1/>
      <LearnCssModule2/> */}
      {/* <LearnUageOfImage/> */}
      {/* <LearnFormHandler/> */}
      {/* <LearnUsingEnv/> */}
    </>
  )
}

export default App
