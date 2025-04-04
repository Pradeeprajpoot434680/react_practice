import { useCallback, useEffect, useState ,useRef} from 'react'


function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [password,setPassword] = useState("");
  const passwordRef = useRef(null);
  // const copyPasswordToClipBoard = useCallback(()=>{
  //   //to select the text
  //   passwordRef.current?.select();
  //   // passwordRef.current?.setSelectionRange(0,4);
  //   window.navigator.clipboard.writeText(password);
  //   setCopied(true);
  //   // alert("Copied clipboard");
  // },[password])
  const copyPasswordToClipBoard = useCallback(()=>{
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      passwordRef.current?.select();
      // Reset the "Copied!" state after 2 seconds
      setTimeout(() => {
        setCopied(false);
        document.getSelection()?.removeAllRanges();
      }, 2000);
    });
  },[password])
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str="";
    str+= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)str+= "0123456789";
    if(charAllowed) str+="!@#$%^&*()_+-={}[]|\:;'";
    for(let i=0; i<length; i++)
    {
      let index = Math.floor(Math.random()*str.length+1);
      pass+= str.charAt(index);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <div className='flex flex-col p-10 h-screen w-full'>
     <h1 className='text-4xl text-white pl-200'>Random password generator</h1>
     <div className='flex flex-col justify-around h-50 w-250 bg-amber-50 rounded-3xl bg-cyan-950 ml-150 mt-20'>
      <div className='h-15 '>
        <input ref={passwordRef} type="text" value={password} readOnly placeholder='Generate password' className='bg-while-500 h-full w-150 border rounded-tl-xl rounded-bl-xl p-3  bg-white ml-30 text-orange-600 text-xl focus:outline-none focus:border-none'/>
        <button onClick={copyPasswordToClipBoard} className='text-xl bg-orange-400 h-full w-25 rounded-tr-xl rounded-br-xl p-3'>  {copied ? 'Copied!' : 'Copy'}</button>
        
      </div>
      <div className='flex justify-around'>
        <div>
        <input onChange={(e)=>setLenght(e.target.value)} type="range" min={6} max={30} id='range' className='cursor-pointer' value={length}/>
        &nbsp;&nbsp;
        <label htmlFor="range" className='text-orange-400 text-2xl'>Length ({length})</label>
        </div>
        <div>
        <input
        defaultChecked={numberAllowed}
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }} type="checkbox" id='num'/>
        &nbsp;&nbsp;
        <label htmlFor="num" className='text-orange-400 text-2xl'>Numbers</label>
        </div>
        <div>

          <input
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }} type="checkbox" id='char'/>
          &nbsp;&nbsp;
          <label htmlFor="char" className='text-orange-400 text-2xl'>Characters</label>
        </div>

      </div>
     </div>
    </div>
  )
}

export default App
