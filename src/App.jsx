import { useState } from 'react'
import './App.css'
import Navbar from './componentes/Navbar'
import Home from './componentes/Home'
import Footer from './componentes/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>

    </>
  )
}

export default App
