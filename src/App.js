import { useEffect, useId,useRef } from 'react';
import MyComponent from './components/MyComponent'; // Update this line with the correct path
import TimerComponent from './components/TimerComponent';
import Ref from './components/Ref';
import Ref_Var from './components/Ref_Var';
import Count from './components/Count';
import InputRef from './components/InputRef';

function App() {
  return (
    <div className="App">
      <MyInput/>

      <InputRef/>
      <Count />
      <Ref_Var/>
      <Ref />
      <MyComponent />
      <TimerComponent />
    </div>
  );
};
function MyInput() {

  const id = useId();//Math.random() uuid
  const ref = useRef();
  //reactを使う時queryselectを使うことはあまり良くない。変わりにuseRefを使う
useEffect(()=>{
  const element = ref.current;
  console.log(element);
},[])

  return(
    <div>
      <button id ="btn">버튼</button>
      <label htmlFor = {id}>이름</label>
      <input id={id} ref={ref}/>
    </div>
  )
}

export default App;
