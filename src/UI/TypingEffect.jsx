import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, delay = 1000, start = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!start) return; // Wait until start is true

    const timer = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }
    }, index === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [index, text, speed, delay, start]);

  return (
    <span>
      {displayedText}
      <span className="animate-blink text-[var(--primary-color)]">|</span>
    </span>
  );
};

export default TypingEffect;
