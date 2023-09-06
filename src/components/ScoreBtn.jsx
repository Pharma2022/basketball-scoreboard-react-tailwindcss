import React from 'react'
import GameBtn from './GameBtn'

const ScoreBtn = ({value, onClick}) => {
  return (
    <GameBtn onClick={()=>onClick(value)} >+{value}</GameBtn>
  )
}

export default ScoreBtn