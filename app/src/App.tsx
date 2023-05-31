import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrashRoom from './components/trash room/TrashRoom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrashRoom />
    </>
  )
}

export default App
