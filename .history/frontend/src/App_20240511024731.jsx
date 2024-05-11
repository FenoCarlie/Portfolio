import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-openSans h-screen w-screen bg-greyGlass">
      <div className="h-24">
        <NavBar />
      </div>
      <div className="h-[calc(100vh - 6rem)]">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default App
