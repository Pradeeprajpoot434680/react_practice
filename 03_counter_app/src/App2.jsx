// in this file we will use hooks
import { useState } from "react";
function App2()
{
  const [count,setCount] = useState(5);//count is a variable that contains the current 
  //state and setCount is a setter function provided by the useState hook that update the value of count
  // anywhere this count will be in the code it will update the all the count values
  const AddNumber=()=>{
    if(count=="Neg value not allowed")
    {
        setCount(0);
    }else{
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);//only one time value of count will increase because usestate 
        //do all the tasks in batches but whenever you passes the callback into thr setCount 
        //then 
        setCount(prevCount => prevCount+1);
        setCount(prevCount => prevCount+1);
        setCount(prevCount => prevCount+1);
        //here you are using the previous value that will change the count  3 times at a single time
    }
        
  }

  const SubNumber = ()=>{
    if(count==0)
    {
        setCount("Neg value not allowed")
    }
    else if(count=="Neg value not allowed")
    {
        setCount(0);
    }
    else{
        setCount(count-1);

    }
  }
//whenever any state variable changes react reacts and check whole dom and find the changes
//in the dom and compares the previours dom adn virtual dom
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
// React Rendering and Virtual DOM Process:
// State Change & Re-render:
// When a state variable changes (e.g., using setState or useState), React triggers a re-render
//  of the component.
// Virtual DOM:
// React creates a Virtual DOM, which is an in-memory copy of the real DOM.
//  This helps React perform updates more efficiently.
// Diffing:
// After the re-render, React compares the new Virtual DOM with the previous Virtual DOM to identify changes.
// Efficient Real DOM Update:
// React only updates the real DOM with the differences it found during the diffing process. This minimizes 
// unnecessary updates and boosts performance.




  
export default App2