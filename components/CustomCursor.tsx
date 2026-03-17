import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'pointer' | 'text'>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Initialize off-screen to avoid (0,0) jump
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Physics configuration
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, smoothOptions);
  const cursorY = useSpring(mouseY, smoothOptions);

  const ringSpringConfig = { damping: 40, stiffness: 200, mass: 0.8 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // 1. Check for pointer capability
    const checkPointer = () => {
      const matches = window.matchMedia('(pointer: fine)').matches;
      setIsSupported(matches);
      if (!matches) setIsVisible(false);
    };
    checkPointer();

    // Add resize listener to re-check capability
    window.addEventListener('resize', checkPointer);

    // 2. Mouse Movement & Interaction Handlers
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // Ensure visible if moving (handles edge cases)
      if (isSupported && !isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
      if (isSupported) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Look up the tree to see if we are inside a clickable element
      // Added 'label' to support form interactions
      const clickableElement = target.closest('a, button, [role="button"], input, textarea, select, [onclick], label');
      const computedCursor = window.getComputedStyle(target).cursor;
      const isClickable = !!clickableElement || computedCursor === 'pointer';

      setIsHovering(isClickable);

      const tagName = target.tagName;
      const isInput = tagName === 'INPUT' || tagName === 'TEXTAREA';
      const isText = !isClickable && (
        tagName === 'P' ||
        tagName === 'SPAN' ||
        /^H[1-6]$/.test(tagName) ||
        tagName === 'LI' ||
        isInput ||
        computedCursor === 'text'
      );

      if (isText) {
        setCursorVariant('text');
      } else if (isClickable) {
        setCursorVariant('pointer');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Attach listeners
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
      window.addEventListener('mouseover', handleMouseOver);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('resize', checkPointer);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isSupported, isVisible]);

  // If not supported device, return null
  if (!isSupported) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[9999]"
          >
            {/* Inner Element - Shape shifts between Dot and Bar (Text) */}
            <motion.div
              className="fixed top-0 left-0 bg-gold mix-blend-difference"
              style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%'
              }}
              animate={{
                width: cursorVariant === 'text' ? 2 : 8,
                height: cursorVariant === 'text' ? 24 : 8,
                borderRadius: cursorVariant === 'text' ? 0 : '50%',
                scale: isClicking ? 0.8 : (isHovering ? 1.2 : 1),
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Outer Ring - Reacts to state with rotation and shape changes */}
            <motion.div
              className="fixed top-0 left-0 flex items-center justify-center"
              style={{
                x: ringX,
                y: ringY,
                translateX: '-50%',
                translateY: '-50%'
              }}
              animate={{
                width: isHovering ? 48 : (cursorVariant === 'text' ? 0 : 36),
                height: isHovering ? 48 : (cursorVariant === 'text' ? 0 : 36),
                opacity: cursorVariant === 'text' ? 0 : 1,
                borderRadius: isHovering ? '0%' : '50%', // Square vs Circle
                rotate: isHovering ? 45 : 0, // Diamond on pointer
                scale: isClicking ? 0.85 : 1,
                borderColor: isHovering ? '#D4AF37' : 'rgba(0, 240, 255, 0.5)',
                backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.05)' : 'rgba(0, 0, 0, 0)',
              }}
              // Continuous rotation for default state using rotate transition override
              transition={{
                default: { duration: 0.2, ease: "easeInOut" },
                rotate: {
                  duration: !isHovering ? 8 : 0.4,
                  repeat: !isHovering ? Infinity : 0,
                  ease: !isHovering ? "linear" : "backOut"
                }
              }}
            >
              {/* Render Ring Content */}
              <div className={`w-full h-full border ${isHovering ? 'border-gold' : 'border-circuit/50'} transition-colors duration-300 ${!isHovering ? 'rounded-full border-dashed' : ''}`} />

              {/* Cyber Corners for Pointer State */}
              <AnimatePresence>
                {isHovering && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gold" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-gold" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-gold" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gold" />

                    {/* Crosshair */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gold/30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[1px] bg-gold/30" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;