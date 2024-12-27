// useInViewAnimation.ts
import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Custom hook for scroll-based animations
 * @param options - Options for triggering animations (e.g., margin, triggerOnce)
 * @returns ref (React ref), isInView (boolean for visibility)
 */
export const useInViewAnimation = (options = { margin: "-20%", once: true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  return { ref, isInView };
};
