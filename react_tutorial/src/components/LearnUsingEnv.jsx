import React from 'react'

export const LearnUsingEnv = () => {
  return (
    <div>
        <h1>Hello world</h1>
        {import.meta.env.VITE_BaseUrl}
        <br />
        {import.meta.env.VITE_API_KEY}
    </div>
  )
}
