import { useEffect, useState } from "react";

export const useTypingEffect = (text: string, speed: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeOut = setTimeout(() => {
        setTypedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeOut);
    }
  }, [currentIndex]);

  return typedText;
};
