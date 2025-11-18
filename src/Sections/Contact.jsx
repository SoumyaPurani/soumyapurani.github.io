import RevealOnScroll from "../UI/RevealOnScroll";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>
                <form action="https://formsubmit.co/soumyapurani@gmail.com" method="POST" className="space-y-6">
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Name..." 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required 
                            className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-[var(--primary-color)] focus:bg-[rgba(0,243,255,0.05)]"
                        />
                    </div>
                    <div className="relative">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Email..." 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required 
                            className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-[var(--primary-color)] focus:bg-[rgba(0,243,255,0.05)]"
                        />
                    </div>
                    <div className="relative">
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={5} 
                            placeholder="Your Message..." 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required 
                            className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-[var(--primary-color)] focus:bg-[rgba(0,243,255,0.05)]"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-[var(--primary-color)] text-black font-bold py-3 px-6 rounded-xl hover:bg-[var(--secondary-color)] hover:text-white hover:shadow-[0_0_15px_rgba(188,19,254,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            </RevealOnScroll>
        </section>
    );
};