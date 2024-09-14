import React from 'react'

export const LearnEvent = () => {
  const handleClick1 = (e)=>{
    e.preventDefault();
    console.log("Button Clicked");
  }

  const handleClick2 = (myid)=>{
    console.log("Button Clicked ",myid);
  }
  return (
    <>
        {/* without argument */}
        <button onClick={handleClick1}>Click 1</button>

        {/* with argument */}
        <button onClick={(e)=>handleClick2("Dadoo")}>Click 2</button>
    </>
  )
}
