import React, { useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev); // Toggle between true and false
  };

  return (
    <div className='container'>
       {isVisible && <h3>Ore wa Luffy,Kaizoku-Ō ni naru!</h3>}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>

     </div>
  );
};

export default App;