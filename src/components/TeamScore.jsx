import React from 'react'
import { colors } from '../consts'

const TeamScore = ({children}) => {
  return (
    <h1  className={`bg-blackish text-pink_red text-8xl py-3` } >{children}</h1>
  )
}

export default TeamScore