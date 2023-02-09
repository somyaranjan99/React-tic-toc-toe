import React,{useState} from 'react';
import './App.css';
import Bord from './components/Bord';
import Scoreboard from './components/Scoreboard';
import Resetboard from './components/Resetboard';
function App() {
  const [board,setBoard]=useState(new Array(9).fill(null));
  const [xPlaying,setXplaying]=useState(true);
  const[score,setScore]=useState({xScore:0,oScore:0});
  const [gameOver,setGameover]=useState(true);
  const WIN_CONDITIONS=[
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  
  const checkWiningConditions=(board)=>{
    for(let i=0;i< WIN_CONDITIONS.length;i++){
      const [x,y,z]= WIN_CONDITIONS[i];
      
      if(board[x] && board[x]===board[y] && board[y]===board[z]){
        setGameover(true);
        return board[x];
      }
      
    }
  }
 const onclickBoard=(idx)=>{
    let updatedState = board.map((value,id)=>{
      if(id===idx){
          return xPlaying===true?"X":"O";
      }else{
        return value;
      }
    });
    const winner=checkWiningConditions(updatedState);
    if(winner){
    if(winner==="X"){
      let {xScore}= score;
      xScore +=1
      setScore({...score,xScore})
    }else{
      let {oScore}= score;
      oScore +=1
      setScore({...score,oScore})
    }
  }
    setBoard(updatedState)
    setXplaying(!xPlaying);
 }
 const resetGame=()=>{
  setGameover(false);
  setBoard(Array(9).fill(null))
  setXplaying(true)
 }
  return (
    <div className="App">
      <Scoreboard score={score} xPlaying={xPlaying} />
     <Bord bord={board} onClick={gameOver?resetGame:onclickBoard}/>
     <Resetboard resetGame={resetGame}/>
    </div>
  );
}

export default App;
