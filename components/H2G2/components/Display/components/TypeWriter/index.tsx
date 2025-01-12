// External
import clsx from "clsx";
import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay }: { text: string; delay: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      setIsTyping(true);

      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={clsx({ "blinking-cursor": isTyping })}>{currentText}</span>
  );
};

export default Typewriter;
