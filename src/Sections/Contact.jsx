import RevealOnScroll from "../UI/RevealOnScroll";

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen font-mono flex items-center justify-center py-20 max-md:py-12 max-md:px-4">
            <RevealOnScroll>
            <div className="px-4 w-150 max-md:w-full max-md:max-w-4xl">
                <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center max-md:text-3xl max-md:mb-8">
                    Get In Touch With Me
                </h2>
                <form action="https://formsubmit.co/soumyapurani@gmail.com" method="POST" className="space-y-6 max-md:space-y-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Name" 
                            required 
                            className="w-full bg-white/10 border border-white/10 rounded-3xl px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 max-md:rounded-2xl max-md:py-2"
                        />
                    </div>
                    <div className="relative">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Email address" 
                            required 
                            className="w-full bg-white/10 border border-white/10 rounded-3xl px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 max-md:rounded-2xl max-md:py-2"
                        />
                    </div>
                    <div className="relative">
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={10} 
                            placeholder="Enter your Message" 
                            required 
                            className="w-full bg-white/10 border border-white/10 rounded-3xl px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 max-md:rounded-2xl max-md:py-2 max-md:rows-6"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r flex justify-center cursor-pointer from-teal-500 to-indigo-600 px-6 rounded-3xl font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] py-3 max-md:rounded-2xl max-md:py-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
            </RevealOnScroll>
        </section>
    );
};