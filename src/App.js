import React,{ useEffect, useRef } from 'react';
import MyComponent from './components/MyComponent'; // Update this line with the correct path
import TimerComponent from './components/TimerComponent';
import Ref from './components/Ref';
import Ref_Var from './components/Ref_Var';
import Count from './components/Count';

const App = () => {
  const inputRef = useRef();
//useRefを使用してDOMに接近する。
  useEffect(() => {
   //console.log(inputRef);
   inputRef.current.focus();
  },[]);

  const login =()=>{
    alert(`환영합니다${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        type = "text"
        placeholder = "username"
      />
      {/*input要素をフォーカスしてる。*/}
      <button onClick ={login}>로그인</button>
      <Count />
      <Ref_Var/>
      <Ref />
      <MyComponent />
      <TimerComponent />
    </div>
  );
};

export default App;
