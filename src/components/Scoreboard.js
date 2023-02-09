import React from 'react'
import './Scoreboard.css';
const Scoreboard = ({score,xPlaying}) => {
    let {xScore,oScore}=score;
  return (
    <div className='scoreboard'>
        <span className={`score x-playnig ${!xPlaying && 'inactive'}`}>X-{xScore}</span>
        <span className={`score o-playnig ${xPlaying && 'inactive'}`}>O-{oScore}</span>

    </div>
  )
}
export default Scoreboard;
