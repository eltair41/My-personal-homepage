import { useEffect } from "react";
import { useState } from "react";

const useText = (phrases) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delay, setDelay] = useState(80);

  useEffect(() => {
    const loop = () => {
      let i = currentIndex % phrases.length;
      let fullText = phrases[i];
      const updateText = !isDeleting
        ? fullText.substring(0, text.length + 1)
        : fullText.substring(0, text.length - 1);

      setText(updateText);

      if (!isDeleting && text === fullText) {
        const end = setTimeout(() => {
          setIsDeleting(true);
          setDelay(40);
        }, 2000);

        return () => clearTimeout(end);
      } else if (isDeleting && text === "") {
        const start = setTimeout(() => {
          setIsDeleting(false);
          setDelay(80);
          setCurrentIndex(currentIndex + 1);
        }, 2000);

        return () => clearTimeout(start);
      }
    };

    const ticker = setInterval(() => {
      loop();
    }, delay);

    return () => clearInterval(ticker);
  }, [text, phrases, isDeleting, delay]);

  return text;
};

export default useText;
