import { useEffect, useRef, useState } from 'react'

function RevealOnScroll({ children, delay = 0 }) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timeoutId = setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            }
        )
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className="reveal-on-scroll"
            style={{
                transitionDelay: `${delay}ms`,
                ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {})
            }}
        >
            {children}
        </div>
    )
}

export default RevealOnScroll
