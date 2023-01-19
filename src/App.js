import { useState } from 'react';
import './App.css';

function App() {
  const [countcell,setcount]=useState(1);
  const [win,setwin]=useState('');
  const [code,setValue]=useState('X');
  const [matrix,setMatrix]=useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ]);
  const BoxColor=(color)=>{
    if (color==='X') return "magenta";
    if (color==='O') return "cornflowerblue";
    return '';
  };
  const checkWinner=()=>{
    if(matrix[0][0] && matrix[0][0]===matrix[0][1] && matrix[0][0]===matrix[0][2])
    {
      setwin("THE WINNER IS "+matrix[0][0]);
    }
    if(matrix[1][0] && matrix[1][0]===matrix[1][1] && matrix[1][0]===matrix[1][2])
    {
      setwin("THE WINNER IS "+matrix[1][0]);
    }
    if(matrix[2][0] && matrix[2][0]===matrix[2][1] && matrix[2][0]===matrix[2][2])
    {
      setwin("THE WINNER IS "+matrix[2][0]);
    }
    if(matrix[0][0] && matrix[0][0]===matrix[1][0] && matrix[0][0]===matrix[2][0])
    {
      setwin("THE WINNER IS "+matrix[0][0]);
    }
    if(matrix[0][1] && matrix[0][1]===matrix[1][1] && matrix[0][1]===matrix[2][1])
    {
      setwin("THE WINNER IS "+matrix[0][1]);
    }
    if(matrix[0][2] && matrix[0][2]===matrix[1][2] && matrix[0][2]===matrix[2][2])
    {
      setwin("THE WINNER IS "+matrix[0][2]);
    }
    if(matrix[0][0] && matrix[0][0]===matrix[1][1] && matrix[0][0]===matrix[2][2])
    {
      setwin("THE WINNER IS "+matrix[0][0]);
    }
    if(matrix[0][2] && matrix[0][2]===matrix[1][1] && matrix[0][2]===matrix[2][0])
    {
      setwin("THE WINNER IS"+matrix[0][2]);
    }
    if(countcell===9){
      setwin("MATCH IS DRAW !!!");
    }
  };
  const makevalue=(r,c)=>{
    if(matrix[r][c]){return;}
    const temp=[...matrix];
    temp[r][c]=code;
    setMatrix(temp);
    setValue(code==='X'?'O':'X');
    setcount(countcell+1);
    checkWinner();
    
  };
  return (
    <div className="App">
      <div className='Header AlignCenter'>TIC TAC TOE</div>
      <div className='GameBoardContainer AlignCenter'>
        <div className='content'>
          {!win &&  <p>NOW IT IS {code}'s TURN</p>}
          </div>
        <div className='game'>
        {win || matrix.map((row,rindex)=>(
          <div className='row'>
          {
            row.map((cell,cindex)=>(
              <div 
              onClick={()=>makevalue(rindex,cindex)} 
              className={`cell AlignCenter ${BoxColor(matrix[rindex][cindex])}`}>
                {matrix[rindex][cindex]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={()=>{setwin("");setcount(1); setMatrix([
    ['','',''],
    ['','',''],
    ['','',''],
  ])}}>RESTART GAME</button>
      </div>
    </div>
  );
}

export default App;
