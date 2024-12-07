import React, { useEffect, useRef } from "react";

const StarsBackground: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createRandomStar = () => {
      const star = document.createElement("div");
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 1;

      const animationDelay = Math.random() * 5 + "s";

      star.classList.add(
        "star",
        "absolute",
        "bg-white",
        "rounded-full",
        "opacity-80"
      );
      star.setAttribute(
        "style",
        `left: ${x}vw; top: ${y}vh; width: ${size}px; height: ${size}px; animation: twinkle 5s infinite ${animationDelay};`
      );

      star.addEventListener("animationend", () => {
        createRandomStar();
        star.remove();
      });

      starsRef.current?.appendChild(star);
    };

    for (let i = 0; i < 30; i++) {
      createRandomStar();
    }

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = starsRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((clientY - rect.top) / rect.height - 0.5) * 2;
        starsRef.current!.style.transform = `translate(${x * 10}px, ${
          y * 10
        }px)`;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      const { clientX, clientY } = touch;
      const rect = starsRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((clientY - rect.top) / rect.height - 0.5) * 2;
        starsRef.current!.style.transform = `translate(${x * 10}px, ${
          y * 10
        }px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={starsRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    ></div>
  );
};

export default StarsBackground;
