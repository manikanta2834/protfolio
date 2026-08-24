import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function CustomCursor() {
  const { shouldReduceEffects } = usePrefersReducedMotion();
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (shouldReduceEffects) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (!visible) setVisible(true);
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Listen to interactives for cursor growth
    const handleHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"], [tabindex="0"]'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    handleHoverListeners();
    
    // Watch for new nodes in DOM to re-apply hover listeners
    const observer = new MutationObserver(handleHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
    };
  }, [shouldReduceEffects, visible]);

  if (shouldReduceEffects || !visible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-cyber-neon-cyan/80 pointer-events-none z-50 transition-all duration-[120ms] ease-out will-change-transform ${
          clicked 
            ? 'scale-75 border-cyber-neon-purple' 
            : linkHovered 
              ? 'scale-150 bg-cyber-neon-cyan/10 border-cyber-neon-purple' 
              : 'scale-100'
        }`}
      />
      {/* Inner Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-cyber-neon-purple rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out will-change-transform ${
          clicked ? 'scale-50' : linkHovered ? 'scale-0' : 'scale-100'
        }`}
      />
    </>
  );
}
