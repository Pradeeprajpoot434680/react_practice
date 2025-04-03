import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Button from './Button'
function App() {
  const [color, setColor] = useState("olive");
  function Button({ color ,onClick})
  {
    return (
        <button className={`border rounded pl-3 pr-3`} style={{backgroundColor:color}}  onClick={() => onClick(color)}>{color}</button>
      )
  }

   
  const changeBg = (color)=>{
    console.log("bg chanegs ",color);
    setColor(color)
  }
  return (
    <div className='border h-screen w-full' style={{backgroundColor:color}}>
      <div className='flex  h-15 -p3 border justify-between p-2 m-20 mt-160'>
      <Button color="red" onClick={changeBg} />
        <Button color="green" onClick={changeBg} />
        <Button color="orange" onClick={changeBg} />
        <Button color="pink" onClick={changeBg} />
        <Button color="yellow" onClick={changeBg} />
        <Button color="blue" onClick={changeBg} />
      </div>
    </div>
  )
}




export default App
