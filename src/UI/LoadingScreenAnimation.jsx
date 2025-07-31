import React, { useEffect, useState } from 'react'

function LoadingScreenAnimation({ onComplete }) {
    const [text, setText] = useState("");
    const fullText = "Welcome to my portfolio. Glad to have you here!";
    
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;
            if (index >= fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 80);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center gap-5 max-md:gap-3">
            <div className="w-[300px] max-md:max-w-[80%] max-md:min-w-[250px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar"></div>
            </div>

            <div className="mb-4 text-2xl max-md:text-xl font-mono font-semibold px-4 text-center">
                {text}
                <span className="animate-blink ml-1 text-2xl max-md:text-xl font-bold">|</span>
            </div>

            <div className="w-[300px] max-md:max-w-[80%] max-md:min-w-[250px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar"></div>
            </div>
        </div>
    )
}

export default LoadingScreenAnimation