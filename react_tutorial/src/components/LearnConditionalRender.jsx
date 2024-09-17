import React, { useState } from 'react'

export const LearnConditionalRender = () => {
    const status = true;
    const [isLogin, setLogin] = useState(false);
    const LogIn = () => {
        setLogin(false);
    };
  return (
    <>
    {status && <h1>Rayhan Kabir Rabbin</h1> }
    {isLogin ? 
        (<>
        <h1>Dashboard</h1> 
        <button onClick={LogIn}>LogOut</button>
        </>) : 
        (<>
        <h1>LogIn Page </h1>
        <button onClick={()=>{setLogin(true)}}>LogIn</button>
        </>)}
    </>
  )
}
