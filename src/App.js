import { useState } from "react";


function App() 
{
  let [counter, setcounter]=useState(15)

  const addvalue=()=>
  {
console.log("value added");

setcounter (counter+1)
console.log(counter);
  }
  const removevalue=()=>{
    setcounter (counter-1)
  }
  return (
    <>
  <h1>Hello {counter}</h1>
  <button onClick={addvalue}>Add Value</button>
  <button onClick={removevalue}>remove</button>

  </>
  );
}

export default App;
