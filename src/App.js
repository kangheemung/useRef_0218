import React from 'react';
import MyComponent from './components/MyComponent'; // Update this line with the correct path
import TimerComponent from './components/TimerComponent';
const App = () => {
  return (
    <div className="App">
      {/* other components */}
      <MyComponent />
      <TimerComponent />
    </div>
  );
};

export default App;
