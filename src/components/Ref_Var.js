import { useRef, useState } from 'react';
function Ref_Var (){
    const[renderer, setRenderer]=useState(0);
    const countRef = useRef(0);
    //Refはレンダリングによって初期化されてもクリックされた値を
    //維持します。すなわち0に戻らない。

    let countVar = 0;

   const doRendering =()=>{
   setRenderer(renderer + 1);
    };
  const printResults = () => {
    console.log(`ref: ${countRef.current},'var: ${countVar}`);
  };
    const increaseRef = () => {
      countRef.current=countRef.current + 1;
        console.log('increaseRef')
    }
    const increaseVar = () => {
      countVar= countVar + 1;
      console.log(countVar)
    }//レンダリングはされないがコンソールで確認できます。
     //画面上レンダリングする場合

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
      <button onClick={doRendering}>renderer</button>
    </div>
  )
}

export default Ref_Var
