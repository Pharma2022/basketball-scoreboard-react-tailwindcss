import React from 'react'
import GameBtn from './GameBtn'

const ResetBtn = ({onClick}) => {
  return (
    <GameBtn onClick={onClick}>NEW GAME</GameBtn>
  )
}

export default ResetBtn