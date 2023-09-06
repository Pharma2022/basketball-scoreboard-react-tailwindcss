import { useState } from 'react'
import TeamScore from './components/TeamScore'
import ScoreBtn from './components/ScoreBtn'
import Title from './components/Title'
import './App.css'
import { nanoid } from 'nanoid'
import ResetBtn from './components/ResetBtn'

function App() {

  const initialScores={homeScore:0,guestScore:0}

  const scoreArr= [1,2,3]
  const [{homeScore,guestScore},setScore]=useState(initialScores)

  const resetScore=()=>setScore(initialScores)

  const increaseHomeScore=(amount)=>setScore(prev=>({...prev, homeScore: prev.homeScore+amount}))
  const increaseGuestScore=(amount)=>setScore(prev=>({...prev, guestScore: prev.guestScore+amount}))


  const colors={
    light_blue:`#9AABD8`,
    navy_blue: `#1B244A`,
    light_gray:`#eee`,
    pink_red:`#F94F6D`,
    blackish: `#080001`,
  }


  return (
    <div className="App">

      <div className="team p-4 bg-sky-950 text-white" >
       <Title>Home</Title>
       <TeamScore>{homeScore}</TeamScore>
        {scoreArr.map(item=>(<ScoreBtn key={nanoid()} value={item} onClick={increaseHomeScore}/>))}
      </div>
      <div className="team p-4 bg-[#1B244A] text-white">
       <Title>Guest</Title>
       <TeamScore>{guestScore}</TeamScore>
        {scoreArr.map(item=>(<ScoreBtn key={nanoid()} value={item} onClick={increaseGuestScore}/>))}
      </div>
      <ResetBtn onClick={resetScore}/>

    </div>
  )
}

export default App
