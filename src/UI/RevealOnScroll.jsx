import React, { useEffect, useRef } from 'react'

function RevealOnScroll({children}) {
    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('visible');
                }
            },
            {
                threshold: 0.1, rootMargin: '0px 0px -50px 0px'
            }
        )
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    });
  return (
    <div ref={ref} className="reveal-on-scroll">
        {children}
    </div>
  )
}

export default RevealOnScroll