import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-10 text-center text-gray-300 glass">
        <div className="flex justify-center gap-8 mb-6 text-2xl">
            <a href="https://x.com/Soumya_1202" className="text-gray-400 hover:text-white transition-colors" target="_blank"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/in/soumyapurani/" className="text-gray-400 hover:text-white transition-colors" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/SoumyaPurani" className="text-gray-400 hover:text-white transition-colors" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/soumya._.12/" className="text-gray-400 hover:text-white transition-colors"target="_blank"><FaInstagram /></a>
        </div>
        <p className="text-sm">@2025 Soumya Purani. All rights reserved.</p>
    </footer>
  )
}

export default Footer