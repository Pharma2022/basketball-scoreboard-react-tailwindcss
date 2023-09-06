import React from 'react'

const GameBtn = ({children,...props}) => {
  return (
    <div className='text-light_blue text-lg border-light_blue border-2 p-4 rounded-md' {...props}>{children}</div>
  )
}

export default GameBtn