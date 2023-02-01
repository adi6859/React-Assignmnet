import React from 'react';

import { useState } from 'react';

function App() {
  const [calc,setcalc]=useState("");
  const [result,setResult]=useState("");
  const ops=['/','*','+','-','.','%','**'];
  const updateCalc = (value:string) => {
    if (
      ops.includes(value) && calc ===''||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setcalc(calc + value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

  const createDigits= () =>{
    const digits =[];
    for(let i=1;i<10;i++){
      digits.push(
        <button
        onClick={() => updateCalc(i.toString())} 
        key={i}
        >{i}
        </button>
      )
    }
    
    return digits;
  }
  const calculate = () =>{
    setcalc(eval(calc).toString());
  }
  const deleteLast = () => {
    if (calc ===''){
      return;
    }
    const value =calc.slice(0,-1);
    setcalc(value);
  }
  const clearcal = () =>{
    if (calc ===''){
      return;
    }
    const value ="";
    setcalc(value);

  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">

         
          {result ? <span>({result})</span> : ''}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('**')}>POW</button>
        
          <button onClick={deleteLast}>DEL</button>
          <button onClick={clearcal}>AC</button>
        </div>
        <div className='OperatorDig'>
        <div className="digits">
          {createDigits()}
         
          <button onClick={() => updateCalc('0')}>0</button>
          <button ></button> 
          <button onClick={() => updateCalc('.')}>.</button>
          
        </div>
        <div className='operator'>
        <button onClick={() => updateCalc('%')}>%</button>
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={() => updateCalc('-')}>-</button>
        <button onClick={calculate }>=</button>
          
        </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;