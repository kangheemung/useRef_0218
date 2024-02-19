import { useState } from 'react';

function Count() {
    const [count, setCount] = useState(1);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>countClick</button>
    </div>
  )
}

export default Count
