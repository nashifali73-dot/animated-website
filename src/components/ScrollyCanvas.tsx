"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const frameCount = 80;
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastWidthRef = useRef<number>(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFrame, setActiveFrame] = useState(0);

  // Bind scroll progress on the 500vh track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Render a specific frame onto the canvas (completely stable reference)
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    // Cover logic: scale image to cover the canvas container
    if (imgRatio > canvasRatio) {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    } else {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Preload sequence frames (runs exactly once on mount)
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const preload = async () => {
      const promises = Array.from({ length: frameCount }).map((_, i) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          const frameNum = String(i).padStart(2, "0");
          img.src = `/sequence/frame_${frameNum}_delay-0.067s.webp`;
          
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
            resolve(img);
          };
          img.onerror = () => {
            // Resolve anyway to avoid blocking on load errors
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
            resolve(img);
          };
          loadedImages[i] = img;
        });
      });

      await Promise.all(promises);
      imagesRef.current = loadedImages;
      setIsLoaded(true);
      
      // Draw first frame initially
      requestAnimationFrame(() => {
        drawFrame(0);
      });
    };

    preload();
  }, [drawFrame]);

  // Handle high-DPI scaling and resizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas || imagesRef.current.length === 0) return;

      // Ignore resizes that only change height (like mobile address bar toggle)
      if (window.innerWidth === lastWidthRef.current && lastWidthRef.current !== 0) return;
      lastWidthRef.current = window.innerWidth;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Set canvas backing store width and height
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Draw the current scroll progress frame
      const currentProgress = scrollYProgress.get();
      const currentIndex = Math.min(
        frameCount - 1,
        Math.floor(currentProgress * frameCount)
      );
      
      drawFrame(currentIndex);
    };

    window.addEventListener("resize", handleResize);
    
    if (isLoaded) {
      handleResize();
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, drawFrame, scrollYProgress]);

  // Update canvas on scroll (uses requestAnimationFrame for high performance)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || imagesRef.current.length === 0) return;

    const index = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );
    
    setActiveFrame(index);
    requestAnimationFrame(() => drawFrame(index));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {/* Preloader Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212]"
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="h-16 w-16 rounded-full border-t-2 border-r-2 border-violet-500 border-b border-l border-transparent"
              />
              <span className="absolute top-[18px] text-xs font-semibold tracking-widest text-violet-400">
                {loadingProgress}%
              </span>
              <h2 className="mt-8 text-sm font-light tracking-[0.25em] uppercase text-gray-400">
                Loading Experience
              </h2>
              <p className="mt-2 text-xs text-gray-600 tracking-wider">
                Preloading cinematic scroll assets...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover opacity-95 transition-opacity duration-300"
          style={{ display: "block" }}
        />
        {/* Soft dark vignettes to help blend canvas edges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#121212]/20 via-transparent to-[#121212]/20" />
        
        {/* Visual frame counter in the corner for premium feel */}
        {isLoaded && (
          <div className="absolute bottom-8 right-8 z-20 font-mono text-xs tracking-wider text-white/30 bg-black/20 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            FRAME // {String(activeFrame).padStart(2, "0")} / {frameCount - 1}
          </div>
        )}

        {/* Overlay Narratives nested inside the sticky container */}
        <Overlay scrollYProgress={scrollYProgress} isLoaded={isLoaded} />
      </div>
    </div>
  );
}
