"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Apply smooth spring physics to the outer mouse follower (defined before early returns)
  const springConfig = { damping: 40, stiffness: 450, mass: 0.3 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Apply spring physics to the inner pinpoint (defined before early returns)
  const innerX = useSpring(mouseX, { damping: 50, stiffness: 850 });
  const innerY = useSpring(mouseY, { damping: 50, stiffness: 850 });

  useEffect(() => {
    // Check if device is touch-based; disable custom cursor for mobile
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Listen for hover states on interactive items
    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    const updateInteractiveElements = () => {
      const elements = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .interactive");
      elements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    updateInteractiveElements();
    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      const elements = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .interactive");
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === "undefined" || !isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-violet-500/40 pointer-events-none z-[9999] bg-transparent"
        animate={{
          scale: hovered ? 1.6 : 1,
          backgroundColor: hovered ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0)",
          borderColor: hovered ? "rgba(167, 139, 250, 0.7)" : "rgba(139, 92, 246, 0.3)",
          boxShadow: hovered ? "0 0 20px rgba(139, 92, 246, 0.4)" : "none",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      {/* Center Pinpoint */}
      <motion.div
        style={{
          x: innerX,
          y: innerY,
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-violet-400 pointer-events-none z-[9999] translate-x-[13px] translate-y-[13px]"
      />
    </>
  );
}
