import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter} from  'react-router-dom'
import Nav from './comp/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Nav/>
    </BrowserRouter>
      
    </>
  )
}

export default App
