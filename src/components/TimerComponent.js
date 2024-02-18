import  { useRef, useEffect } from 'react';
function TimerComponent() {
    const count = useRef(0);

    useEffect(() => {
      setTimeout(() => {
        count.current += 1;
      }, 1000);
    });

  }

export default TimerComponent;