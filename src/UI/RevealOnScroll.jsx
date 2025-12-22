import React, { useEffect, useRef } from 'react'

function RevealOnScroll({children, delay = 0}) {
    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                      if(ref.current) ref.current.classList.add('visible');
                    }, delay);
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
    }, [delay]);
  return (
    <div ref={ref} className="reveal-on-scroll">
        {children}
    </div>
  )
}

export default RevealOnScroll