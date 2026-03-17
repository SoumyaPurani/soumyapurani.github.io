import RevealOnScroll from "../UI/RevealOnScroll";
import ParticleField from '../3D/ParticleField';

function Contact() {
    return (
        <section id="contact" className="min-h-screen py-24 flex items-center justify-center relative overflow-hidden">
            <ParticleField particleCount={150} />
            <RevealOnScroll>
            <div className="px-6 w-full max-w-2xl z-10 relative mx-auto">
                <div className="text-center mb-14">
                    <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase mb-3">Reach Out</p>
                    <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-sm text-white/30 mt-4 max-w-md mx-auto">Have a project in mind or just want to say hello? Drop me a message.</p>
                </div>

                <form action="https://formsubmit.co/soumyapurani@gmail.com" method="POST" className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:border-[var(--primary-color)]/30 focus:bg-[var(--primary-color)]/[0.02] focus:shadow-[0_0_20px_rgba(0,229,255,0.05)]"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email address"
                                required
                                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:border-[var(--primary-color)]/30 focus:bg-[var(--primary-color)]/[0.02] focus:shadow-[0_0_20px_rgba(0,229,255,0.05)]"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="sr-only">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:border-[var(--primary-color)]/30 focus:bg-[var(--primary-color)]/[0.02] focus:shadow-[0_0_20px_rgba(0,229,255,0.05)]"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={8}
                            placeholder="Your message"
                            required
                            className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:border-[var(--primary-color)]/30 focus:bg-[var(--primary-color)]/[0.02] focus:shadow-[0_0_20px_rgba(0,229,255,0.05)] resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-black font-bold text-sm px-6 py-4 rounded-xl cursor-pointer transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_30px_var(--primary-glow)]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            </RevealOnScroll>
        </section>
    );
}

export default Contact;
