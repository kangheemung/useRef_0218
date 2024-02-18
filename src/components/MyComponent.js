import  { useRef, useEffect } from 'react';
function MyComponent() {
  // DOM element reference creation
  const myInputRef = useRef();

  useEffect(() => {
    // Focus the input element after the component has mounted
    myInputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={myInputRef} type="text" />
    </div>
  );
}

export default MyComponent;

