import { useState } from 'react'
import TeamScore from './components/TeamScore'
import ScoreBtn from './components/ScoreBtn'
import Title from './components/Title'
import './App.css'
import { nanoid } from 'nanoid'
import ResetBtn from './components/ResetBtn'
import { colors } from './consts'
function App() {

  const initialScores={homeScore:0,guestScore:0}

  const scoreArr= [1,2,3]
  const [{homeScore,guestScore},setScore]=useState(initialScores)

  const resetScore=()=>setScore(initialScores)

  const increaseHomeScore=(amount)=>setScore(prev=>({...prev, homeScore: prev.homeScore+amount}))
  const increaseGuestScore=(amount)=>setScore(prev=>({...prev, guestScore: prev.guestScore+amount}))





  return (
    <div className={`bg-[${colors.navy_blue}] h-screen w-full text-white`}>
      <div className='w-full flex flex-wrap'>

        <div className="team p-4 flex flex-col " >
            <Title>Home</Title>
            <TeamScore>{homeScore}</TeamScore>
            <div className='flex justify-around'>
              {scoreArr.map(item=>(<ScoreBtn key={nanoid()} value={item} onClick={increaseHomeScore}/>))}
            </div>
        </div>
        <div className="team p-4 flex flex-col ">
           <Title>Guest</Title>
            <TeamScore>{guestScore}</TeamScore>
            <div className='flex justify-around'>
              {scoreArr.map(item=>(<ScoreBtn key={nanoid()} value={item} onClick={increaseGuestScore}/>))}
            </div>
        </div>
      </div>
      <div>

        <ResetBtn onClick={resetScore}/>
      </div>

    </div>
  )
}

export default App
