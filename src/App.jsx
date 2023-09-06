import { useState } from 'react'
import TeamScore from './components/TeamScore'
import ScoreBtn from './components/ScoreBtn'
import Title from './components/Title'
import './App.css'
import { nanoid } from 'nanoid'
import ResetBtn from './components/ResetBtn'
import { colors } from './consts'
import ScoreBtnContainer from './components/ScoreBtnContainer'
import TeamContainer from './components/TeamContainer'
function App() {

  const initialScores={homeScore:0,guestScore:0}

  const scoreArr= [1,2,3]
  const [{homeScore,guestScore},setScore]=useState(initialScores)

  const resetScore=()=>setScore(initialScores)

  const increaseHomeScore=(amount)=>setScore(prev=>({...prev, homeScore: prev.homeScore+amount}))
  const increaseGuestScore=(amount)=>setScore(prev=>({...prev, guestScore: prev.guestScore+amount}))





  return (
    <div className={`bg-navy_blue text-light_gray text-center h-screen w-full text-white font-cursedTimer`}>
      <div className='w-full flex flex-col max-w-md mx-auto [&>*]:w-140px '>

        <TeamContainer>
            <Title>Home</Title>
            <TeamScore>
                {homeScore}
            </TeamScore>
            <ScoreBtnContainer>
              {scoreArr.map(item=>(<ScoreBtn key={nanoid()} value={item} onClick={increaseHomeScore}/>))}
            </ScoreBtnContainer>
        </TeamContainer>
        <TeamContainer>
           <Title>Guest</Title>
            <TeamScore>
              {guestScore}
            </TeamScore>
            <ScoreBtnContainer>
              {scoreArr.map(item=>(<ScoreBtn key={nanoid()} value={item} onClick={increaseGuestScore}/>))}
            </ScoreBtnContainer>
        </TeamContainer>
      </div>
      <div className='flex items-center justify-center'>

        <ResetBtn onClick={resetScore}/>
      </div>

    </div>
  )
}

export default App
