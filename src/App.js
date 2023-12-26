
import { useState } from 'react';
import './App.css';





function App() {
const[color ,setcolor]=useState("olive")
  return (
<>
<div className=' w-full h-screen duration-200' style={{backgroundColor:color}}>
  <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
  <button onClick={()=>setcolor("red")} className=' outline-none px-4' style={{background:"red"}}>Red</button>
  
</div>
<div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
<button  onClick={()=>setcolor("green")} className=' outline-none px-4' style={{background:"green"}}>Green</button>
  
</div>

  </div>
</div>
</>
  );
}

export default App;
