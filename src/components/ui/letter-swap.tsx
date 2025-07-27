"use client";

import { useState, useRef } from "react";
import { motion, stagger, AnimationOptions } from "framer-motion";

interface TextProps {
  label: string;
  reverse?: boolean;
  transition?: AnimationOptions;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number;
  className?: string;
  onClick?: () => void;
}

const LetterSwapForward = ({
  label,
  reverse = true,
  transition = {
    type: "spring",
    duration: 0.7,
  },
  staggerDuration = 0.03,
  staggerFrom = "first",
  className,
  onClick,
  ...props
}: TextProps) => {
  const [blocked, setBlocked] = useState(false);
  const scopeRef = useRef<HTMLSpanElement>(null);

  const hoverStart = () => {
    if (blocked || !scopeRef.current) return;

    setBlocked(true);

    const letters = scopeRef.current.querySelectorAll(".letter");
    const lettersSecondary = scopeRef.current.querySelectorAll(".letter-secondary");

    // Animate primary letters
    letters.forEach((letter, i) => {
      const motionLetter = letter as HTMLElement;
      motionLetter.style.transform = reverse ? "translateY(100%)" : "translateY(-100%)";
      motionLetter.style.transition = `transform ${transition.duration || 0.7}s ${transition.type === "spring" ? "cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "ease"} ${i * (staggerDuration || 0.03)}s`;
    });

    // Animate secondary letters
    lettersSecondary.forEach((letter, i) => {
      const motionLetter = letter as HTMLElement;
      motionLetter.style.top = "0%";
      motionLetter.style.transition = `top ${transition.duration || 0.7}s ${transition.type === "spring" ? "cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "ease"} ${i * (staggerDuration || 0.03)}s`;
    });

    // Reset after animation
    setTimeout(() => {
      letters.forEach((letter) => {
        const motionLetter = letter as HTMLElement;
        motionLetter.style.transform = "translateY(0%)";
        motionLetter.style.transition = "none";
      });

      lettersSecondary.forEach((letter) => {
        const motionLetter = letter as HTMLElement;
        motionLetter.style.top = reverse ? "-100%" : "100%";
        motionLetter.style.transition = "none";
      });

      setBlocked(false);
    }, (transition.duration || 0.7) * 1000 + letters.length * (staggerDuration || 0.03) * 1000);
  };

  return (
    <span
      className={`flex justify-center items-center relative overflow-hidden ${className}`}
      onMouseEnter={hoverStart}
      onClick={onClick}
      ref={scopeRef}
      {...props}
    >
      <span className="sr-only">{label}</span>

      {label.split("").map((letter: string, i: number) => {
        return (
          <span
            className="whitespace-pre relative flex"
            key={i}
            aria-hidden={true}
          >
            <span className="relative letter" style={{ top: 0 }}>
              {letter}
            </span>
            <span
              className="absolute letter-secondary"
              style={{ top: reverse ? "-100%" : "100%" }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </span>
  );
};

export default LetterSwapForward;