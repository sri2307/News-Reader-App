import React,{useEffect} from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const App=() =>{
  const alanKey='59bbc8c3150b7e064ceabd6ee5cbe28c2e956eca572e1d8b807a3e2338fdd0dc/stage'
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command})=>{
        if(command==='testCommand'){
          alert('This code was executed successfully')
        }
      }
    })
  },[])

  return ( 

    <div>
      <h1>Alan AI News Application</h1>
    </div>
    
  );
}   

export default App;
