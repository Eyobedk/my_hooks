import React, { Fragment, useEffect, useState } from 'react';

function App() {
  const [count, updateCount] = useState(0);

  const increament = ()=>{
    updateCount(count + 1);
  }

  useEffect(
    ()=>{document.title = `You clicked ${count} times`}
  )
  return(<Fragment>
    <h1>You have clicked count {count} </h1>
    <button onClick={increament}> clickme</button>
    </Fragment>)
}


export default App;