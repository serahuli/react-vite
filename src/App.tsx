import { useState } from 'react'
import Verificode from '@components/Verificode'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Verificode width={100} height={36} />
    </div>
  )
}

export default App
