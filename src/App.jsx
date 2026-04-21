import React from 'react'
import Navbar from './UI/Navbar'
import MobileMenu from './UI/MobileMenu'
import LoadingScreenAnimation from './UI/LoadingScreenAnimation'
import Home from './Sections/Home'
import About from './Sections/About'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Education from './Sections/Education'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <>
      {!isLoaded && (
        <LoadingScreenAnimation onComplete={() => setIsLoaded(true)} />
      )}
      <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home startTyping={isLoaded} />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
