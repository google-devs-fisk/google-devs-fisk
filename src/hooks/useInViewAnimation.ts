import { useRef } from "react";
import { useInView, UseInViewOptions } from "framer-motion";

/**
 * Custom hook for scroll-based animations
 * @param options - Options for triggering animations (e.g., margin, triggerOnce)
 * @returns ref (React ref), isInView (boolean for visibility)
 */
export const useInViewAnimation = (options: UseInViewOptions = { margin: "-20%", once: true }) => {
  // Ensure the margin is properly typed and matches what `useInView` expects
  const ref = useRef(null);
  const isInView = useInView(ref, options);

  return { ref, isInView };
};
