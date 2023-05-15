import { useState } from 'react'
import './App.css'
import {Header} from "./Header.jsx"
import {Content} from "./Content.jsx"
import {Footer} from "./Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
