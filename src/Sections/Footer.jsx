import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <footer>
            <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10">
                <div className="flex gap-10 p-4 justify-center text-white">
                <a href="https://x.com/Soumya_1202" className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gradient-to-tr from-black via-gray-800 to-black text-white border-white/20 hover:shadow-lg hover:shadow-black/30" target="_blank"><FaXTwitter /></a>
                    <a href="https://www.linkedin.com/in/soumyapurani/" className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gradient-to-tr from-[#0077B5] via-[#006699] to-[#005582] text-white border-white/20 hover:shadow-lg hover:shadow-[#0077B5]/30" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/SoumyaPurani" className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white border-white/20 hover:shadow-lg hover:shadow-gray-500/30" target="_blank"><FaGithub /></a>
                    <a href="https://www.instagram.com/soumya._.12/" className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 text-white border-white/20 hover:shadow-lg hover:shadow-pink-500/30"target="_blank"><FaInstagram /></a>
                </div>
                <p>@2025 Soumya Purani. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer