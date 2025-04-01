import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function CustomApp()
{
  return(
    <div>
      this is my custom app
    </div>
  )
}



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// createRoot(document.getElementById('root')).render(
//   <CustomApp/>
// )
const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

// it works it means that the components that renders changes in a object;
// createRoot(document.getElementById('root')).render(
//   anotherElement
// )

const ReactElement  = {
  type:'a',
  props:{
      href:'https://www.google.com',
      target:'_blanck',
  },
  children:'Click me to visit google'
}
//why is it not working
//there is some formate of the passing object so this is not valid formate to pass this object
// key value pairs is not valid
// createRoot(document.getElementById('root')).render(
//   ReactElement
// )

// now i want to make a Element according to react
// props(key and value of the passing object is fixed)
// const reactElement = React.createElement(
//   'a',//first is tag name
//   {href:'https://www.google.com',target:'_blanck'},//attributes
//   'Click me to visit google'//text

// )

// createRoot(document.getElementById('root')).render(
//   reactElement
// )

// variables in app
// function CustomApp()
// {
//   const username = "pradeep kumar"
//   return(
//     <div>
//       this is my custom app {username}
//     </div>
//   )
// }
// {} inside the carli brakets we write the evaluted expression not any this for evalution
// because when this function changes in object like this
// const reactElement = React.createElement(
//   'a',//first is tag name
//   {href:'https://www.google.com',target:'_blanck'},//attributes
//   'Click me to visit google'//text

// )

//the variables comes inside the text directly 

//examples
const username = "pradeep kumar";
const reactElement = React.createElement(
  'a',//first is tag name
  {href:'https://www.google.com',target:'_blanck'},//attributes
  'Click me to visit google',//text
  username

)

createRoot(document.getElementById('root')).render(
    reactElement//usernmea will come on screen
  )