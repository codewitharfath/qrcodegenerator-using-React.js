import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QRCODE from './compoents/QRCODE'

function App() {
  const [count, setCount] = useState(0)
  const items = [
    {id:1,name:"item1"},
    {id:2,name:"item2"}
  ]

  return (
    <>
    <QRCODE items={items} />
    
      
     
    </>
  )
}

export default App
