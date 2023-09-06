import React from 'react'

const GameBtn = ({children,...props}) => {
  return (
    <div {...props}>{children}</div>
  )
}

export default GameBtn