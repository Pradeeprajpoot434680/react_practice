import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)

// in this file we will learn about the createRoot
//createRoot create a dom tree structure like browser and compares the actual changes 
// and update the ui according to changes
// but browser remove the whole dom and repaint the dom it is called page reloading
//artical https://github.com/acdlite/react-fiber-architecture

// hidretation
// when html comes on webpage and js is not loaded till now . so btn and other things 
//will not work => to inject the js in weblayout that is called hidratation

// reconciliation
// The algorithm React uses to diff one tree(browser tree) with another(react tree created by createRoot) to determine which parts need to be changed.
// git also use the reconciliation algorithm changes in the files

//whenever we iterates any array and put the values and given some unique keys for it why
// ans - in the fibre algorithm to improve the efficiency of the list 
