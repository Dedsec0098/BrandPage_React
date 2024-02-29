import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Mid from './components/Mid'

function App() {
  const locomotiveScroll = new LocomotiveScroll();//scroll motion from locomotive

  const [count, setCount] = useState(0)

  return (
    <div className ="w-full min-h-screen text-white bg-zinc-900" >
      <Navbar />
      <LandingPage />
      <Marquee />
      <About/>
      <Eyes />
      <Featured />
      <Cards />
      <Mid />
      <Footer/>
    </div>
  )
}

export default App
