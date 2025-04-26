import React from 'react'
import './App.css'
import Navbar from './UI/Navbar'
import MobileMenu from './UI/MobileMenu'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div className="text-3xl font-bold underline">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </div>
  )
}

export default App
