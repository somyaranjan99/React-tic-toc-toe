import React from 'react'
import Box from './Box';
import './bord.css';
 const Bord = ({bord,onClick}) => {
  return (
    <div className='bord'>
      {bord.map((ele,idx)=>{
        return <div key={idx}><Box value={ele} onClick={()=>ele===null && onClick(idx)} /></div>
      })}
      
      </div>
  )
}
export default Bord;
