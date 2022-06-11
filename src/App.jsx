import { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import Body from './components/Body'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar/>
      <Body/>
    </div>
  )
}

export default App
