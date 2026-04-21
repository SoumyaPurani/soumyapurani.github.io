import RevealOnScroll from "../UI/RevealOnScroll";
import { FiArrowUpRight } from "react-icons/fi";

function Contact() {
 return (
  <section id="contact" className="min-h-screen py-24 md:py-32 flex items-center justify-center relative overflow-hidden">
   <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,255,71,0.03) 0%, transparent 70%)' }} />

   <RevealOnScroll>
    <div className="container mx-auto px-6 lg:px-12 z-10 relative">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
      <div className="flex flex-col justify-center">
       <p className="font-mono text-xs text-(--text-muted) tracking-[0.2em] uppercase mb-3">Reach Out</p>
       <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">
        Let's work<br /><span className="text-gradient">together.</span>
       </h2>
       <p className="text-(--text-dim) text-base leading-[1.7] mb-8 max-w-sm">
        Have a project in mind or just want to say hello? I'm always open to discussing new work, collaborations, or opportunities.
       </p>
       <a
        href="mailto:soumyapurani@gmail.com"
        className="inline-flex items-center gap-2 text-(--primary-color) font-mono text-sm font-medium hover:gap-3 transition-all duration-300 mb-8"
       >
        soumyapurani@gmail.com
        <FiArrowUpRight className="text-xs" />
       </a>
       <div className="flex gap-6 text-(--text-muted) text-sm font-mono">
        <span>Canada</span>
        <span className="text-(--border-subtle)">·</span>
        <span>Open to remote</span>
       </div>
      </div>

      <div>
       <form action="https://formsubmit.co/soumyapurani@gmail.com" method="POST" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
           type="text"
           id="name"
           name="name"
           placeholder="Your name"
           required
           className="underline-input"
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
           className="underline-input"
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
          className="underline-input"
         />
        </div>
        <div>
         <label htmlFor="message" className="sr-only">Message</label>
         <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Your message"
          required
          className="underline-input resize-none"
         />
        </div>
        <button
         type="submit"
         className="px-10 py-3.5 bg-(--secondary-color) text-(--bg-color) font-bold text-sm tracking-wide hover:bg-(--primary-color) transition-all duration-300 cursor-pointer"
        >
         Send Message
        </button>
       </form>
      </div>
     </div>
    </div>
   </RevealOnScroll>
  </section>
 );
}

export default Contact;
