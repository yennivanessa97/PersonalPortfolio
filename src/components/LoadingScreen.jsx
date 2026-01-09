import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Human-Centered Code/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex items-center justify-center">
      {/* Wrapper defines width */}
      <div className="flex flex-col items-start">
        {/* Text */}
        <div className="mb-4 text-4xl font-mono font-bold whitespace-nowrap">
          {text}
          <span className="animate-blink ml-1">|</span>
        </div>

        {/* Loading line aligned to text width */}
        <div className="h-[2px] w-full bg-gray-800 rounded relative overflow-hidden">
          <div className="h-full w-[40%] bg-[#5315C0] shadow-[0_0_15px_#5315C0] animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};
