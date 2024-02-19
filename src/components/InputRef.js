import React,{ useEffect, useRef } from 'react';

function InputRef() {
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
    <div>
       <input
        ref={inputRef}
        type = "text"
        placeholder = "username"
      />
      {/*input要素をフォーカスしてる。*/}
      <button onClick ={login}>로그인</button>
    </div>
  )
}

export default InputRef;
