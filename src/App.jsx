import { useState } from 'react'
import './App.css'
import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
    </div>
  )
}

export default App
