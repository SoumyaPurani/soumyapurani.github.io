import React from 'react'
import './App.css'
import Navbar from './UI/Navbar'
import MobileMenu from './UI/MobileMenu'
import LoadingScreenAnimation from './UI/LoadingScreenAnimation';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      {!isLoading && (
        <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </>
  )
}

export default App
