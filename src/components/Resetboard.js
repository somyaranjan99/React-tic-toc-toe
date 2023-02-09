import React from 'react';
import './Resetboard.css';

const Resetboard=({resetGame})=>{
    return(<div className='resetCont'><button className='resetBtn' onClick={()=>resetGame()}>Reset Game</button></div>)
}
export default Resetboard;