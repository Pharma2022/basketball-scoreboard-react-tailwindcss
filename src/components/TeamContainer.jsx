import React from 'react'

const TeamContainer = ({children}) => {
  return (
    <div className='w-full py-2 px-4 flex flex-col gap-3  justify-around mx-auto'>{children}</div>
  )
}

export default TeamContainer