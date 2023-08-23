'use client'

import { useEffect } from 'react';

const Error = ({error, reset}) => {

  useEffect(() => {
    console.log(error);
  }, [error])

  return (
    <>
      <h2>OOPS!!! We have hit an Error</h2>
      
      <button onClick={() => reset()}>Try again!</button>
    </>
  )
}

export default Error;