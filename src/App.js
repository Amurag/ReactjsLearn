
import './App.css';
import Card from './components/card';




function App() {
  let myObj={
    name:"Anurag", age:"24"
  }
  return (
<>
<Card Channel="ChaiaurCode" someobj={myObj} btnText="click me"/>
<Card Channel="Anurag" btnText="more"/>
<Card Channel="Anurag"/>
</>
  );
}

export default App;
