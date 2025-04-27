import React from 'react'
import profileImg from '../assets/profileImg.jpg'

function Home() {
  return (
    <section id="#home" className="min-h-screen flex flex-col items-center justify-center lg:flex-row-reverse gap-9 lg:gap-15">
        <div className="text-center z-10 px-4">
            <img className="w-[200px] border-0 mt-20 rounded-full shadow-lg shadw-gray-500/70 lg:m-0 lg:max-width-[250px] object-cover object-bottom hover:translate-y-1 transition-all" src={profileImg} alt="Profile Image" />
        </div>
        <div className="text-center font-mono z-10 px-4">
            <h1 className="text-4xl md:text-5xl lg:max-w-w[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue500 to-indigo-600 bg-clip-text text-transparent leading-right">Hi! I am Soumya Purani</h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg ax-auto">
                I am a software engineer who loves to create secure, interactive and scalable software. I love to build solutions for difficult problems and maximize the performance of any software.
            </p>
        </div>
    </section>
  )
}

export default Home
