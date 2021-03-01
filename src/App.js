import React, { useState } from 'react';
// import Lifecycle from './Lifecycle';
// import FetchCard from './FetchCard';
import ResizeApp from './ResizeApp';

function App() {

  const [show, setShow] = useState(false);
  
  return (
    <div>
      {/* <Lifecycle/> */}
      {/* <FetchCard/> */}
      {/* <ResizeApp/> */}
      <button onClick={() => setShow(!show)}>
        show/Hide
      </button>
      {show && <ResizeApp/>}
    </div>
  );
}

export default App;
