
import './App.css'

//in this code the function are working count is also updating 
// but in ui update is not happening
//if this count varible has come 4-5 times in the code then what will happen
// if i use core js then i select all the component that will update
function App() {
  let count=10;
  const AddNumber = ()=>{
    console.log("number added",count);
    count +=1;
  }
    
  const SubNumber = ()=>
  {
    console.log("number subtract",count);
    count-=1;
  }
    
  return (
    <>
      <h1>This is counter App</h1>
      <h2>count:{count}</h2>
      <button onClick={AddNumber}>Add</button>
      &nbsp; &nbsp;
      <button onClick={SubNumber}>Subtract</button>
      <p>count:{count}</p>
    </>
  )
}

export default App
